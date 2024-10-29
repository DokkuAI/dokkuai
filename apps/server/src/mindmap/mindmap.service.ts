import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMindmapDto } from './dto/create-mindmap.dto';
import { UpdateMindmapDto } from './dto/update-mindmap.dto';
import { MindmapRepository } from './repository/mindmap.repository';
import Mindmap from './schema/mindmap.schema';
import { Types } from 'mongoose';
import FileService from 'src/utils/files/file.service';
import { Readable } from 'stream';

@Injectable()
export class MindmapService {
  constructor(
    private readonly repository: MindmapRepository,
    private readonly fileService: FileService,
  ) {}
  async create(
    createMindmapDto: CreateMindmapDto,
    id: Types.ObjectId,
    name: string,
  ): Promise<Mindmap> {
    const doc: any = await this.repository.create({
      ...createMindmapDto,
      userId: id,
      name,
      path: 'temp'
    });
    await this.upload({
      content: createMindmapDto.content,
      path: doc.path,
      name: doc._id,
    });
    return doc;
  }

  findAll() {
    return `This action returns all mindmap`;
  }

  async findOne(id: string): Promise<any> {
    if (id) {
      const key = `temp/${id}`;
      const response = await this.fileService.getFile(key);

      // Convert the response body stream to a string
      const streamToString = (stream: Readable): Promise<string> => {
        return new Promise((resolve, reject) => {
          const chunks: any[] = [];
          stream.on('data', (chunk) => chunks.push(chunk));
          stream.on('error', reject);
          stream.on('end', () =>
            resolve(Buffer.concat(chunks).toString('utf-8')),
          );
        });
      };

      const data = await streamToString(response.Body as Readable);
      return JSON.parse(data);
    }
    throw new NotFoundException();
  }

  update(id: number, updateMindmapDto: UpdateMindmapDto) {
    return `This action updates a #${id} mindmap`;
  }

  remove(id: number) {
    return `This action removes a #${id} mindmap`;
  }

  async saveMindmap(
    saveMindmap: CreateMindmapDto,
    id: Types.ObjectId,
  ): Promise<string> {
    const doc: any = await this.repository.findById(id);
    const mindmapData = {
      name: doc._id,
      content: saveMindmap.content,
      path: 'temp', //path -> userId/notes/file_name.json
    };
    await this.upload(mindmapData);
    return;
  }

  async upload(mindmap: { name: string; content: string; path: string }) {
    const mindmapPayload = {
      name: mindmap?.name ?? new Types.ObjectId().toString(),
      type: 'json',
      content: Buffer.from(mindmap.content, 'utf-8'),
    };
    return await this.fileService.uploadJSON(mindmapPayload, mindmap.path);
  }
}
