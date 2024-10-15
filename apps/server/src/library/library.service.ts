import {
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import LibraryRepository from './repository/library.repository';
import Library from './schema/library.schema';
import FileService from 'src/utils/files/file.service';
import { Types } from 'mongoose';

@Injectable()
export default class LibraryService {
  constructor(
    private readonly repository: LibraryRepository,
    private readonly fileService: FileService,
  ) {}
  create(
    createLibraryDto: CreateLibraryDto,
    userId: Types.ObjectId,
  ): Promise<Library> {
    return this.repository.create({
      ...createLibraryDto,
      userId: userId,
    });
  }

  async findAll(query: any, offset: number): Promise<Library[]> {
    return await this.repository.find(query, offset);
  }
  async findOne(id: Types.ObjectId): Promise<Library> {
    return await this.repository.findById(id);
  }
  async find(id: Types.ObjectId): Promise<string> {
    const doc = await this.repository.findById(id);
    if (doc) {
      return this.fileService.getCdnLink(doc.path);
    }
    throw new NotFoundException();
  }

  update(
    id: Types.ObjectId,
    updateLibraryDto: UpdateLibraryDto,
  ): Promise<Library> {
    return this.repository.findByIdAndUpdate(id, updateLibraryDto);
  }

  async remove(id: Types.ObjectId): Promise<void> {
    // 1. Fetch doc from db
    const fileDoc = await this.repository.findById(id);

    // 2. Delete file for s3
    const key = fileDoc.path;
    const res = await this.fileService.delete(key);

    // 3. If successfully deleted from s3 then delete from db
    if (res) {
      await this.repository.findByIdAndDelete(id);
    }
  }

  async upload(
    userId: Types.ObjectId,
    file: Express.Multer.File,
    path: string,
    body: { projectId?: Types.ObjectId },
  ) {
    const s3FilePath = await this.fileService.upload(file, path);
    const createLibraryDto: CreateLibraryDto = {
      name: file.originalname,
      type: file.mimetype,
      path: s3FilePath.path,
      pinned: false,
    };
    return await this.create({...createLibraryDto, ...body}, userId);
  }
}
