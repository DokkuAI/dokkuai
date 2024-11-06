import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import FileService from 'src/utils/files/file.service';
import { LoggerService } from 'src/utils/helper/logger.service';
import { Readable } from 'stream';
import { CreateMindmapDto } from './dto/create-mindmap.dto';
import { UpdateMindmapDto } from './dto/update-mindmap.dto';
import { MindmapRepository } from './repository/mindmap.repository';
import Mindmap from './schema/mindmap.schema';

@Injectable()
export class MindmapService {
  constructor(
    private readonly repository: MindmapRepository,
    private readonly fileService: FileService,
    private readonly logger: LoggerService,
  ) {}
  async create(
    createMindmapDto: CreateMindmapDto,
    userId: Types.ObjectId,
    workspaceId: Types.ObjectId,
  ): Promise<Mindmap> {
    try {
      const doc: any = await this.repository.create({
        ...createMindmapDto,
        userId: userId,
        workspaceId,
        path: `${workspaceId}/mindmaps`,
      });
      await this.upload({
        content: createMindmapDto.content,
        path: doc.path,
        name: doc._id,
      });
      await this.repository.findByIdAndUpdate(doc._id, {
        path: `${doc.path}/${doc._id}`,
      });
      return doc;
    } catch (error) {
      this.logger.error(
        'Error creating Mindmap',
        `mindmapService.create`,
        error,
      );
      throw new Error();
    }
  }

  async findAll(query) {
    try {
      return await this.repository.find(query);
    } catch (error) {
      this.logger.error(
        'Error finding all mindmap of one workspace',
        `mindmapService.findAll`,
        error,
      );
      throw new Error();
    }
  }

  async findOne(id: Types.ObjectId): Promise<any> {
    try {
      const doc = await this.repository.findById(id);
      const key = doc.path;
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
    } catch (error) {
      this.logger.error(
        'Error fetching mindmap from bucket',
        `mindmapService.findOne`,
        error,
      );
      throw new Error();
    }
  }

  async update(
    id: Types.ObjectId,
    updateMindmapDto: UpdateMindmapDto,
  ): Promise<Mindmap> {
    try {
      return await this.repository.findByIdAndUpdate(id, updateMindmapDto);
    } catch (error) {
      this.logger.error(
        'Error updating mindmap from db',
        `mindmapService.update`,
        error,
      );
      throw new Error();
    }
  }

  async remove(id: Types.ObjectId): Promise<void> {
    try {
      const doc = await this.repository.findById(id);
      const key = doc.path;
      const res = await this.fileService.delete(key);
      if (res) {
        await this.repository.findByIdAndDelete(id);
      }
    } catch (error) {
      this.logger.error(
        'Error deleting mindmap',
        `mindmapService.remove`,
        error,
      );
      throw new Error();
    }
  }

  async saveMindmap(
    saveMindmap: CreateMindmapDto,
    id: Types.ObjectId,
  ): Promise<void> {
    try {
      const doc: any = await this.repository.findById(id);
      const mindmapData = {
        name: doc._id,
        content: saveMindmap.content,
        path: doc.path,
      };
      await this.upload(mindmapData);
      return;
    } catch (error) {
      this.logger.error(
        'Error updating mindmap in bucket',
        `mindmapService.saveMindmap`,
        error,
      );
      throw new Error();
    }
  }

  async upload(mindmap: { name: string; content: string; path: string }) {
    try {
      const mindmapPayload = {
        name: mindmap?.name ?? new Types.ObjectId().toString(),
        type: 'json',
        content: Buffer.from(mindmap.content, 'utf-8'),
      };
      return await this.fileService.uploadJSON(mindmapPayload, mindmap.path);
    } catch (error) {
      this.logger.error(
        'Error uploading mindmap to bucket',
        `mindmapService.upload`,
        error,
      );
      throw new Error();
    }
  }
}
