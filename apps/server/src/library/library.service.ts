import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import LibraryRepository from './repository/library.repository';
import Library from './schema/library.schema';
import FileService from 'src/utils/files/file.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class LibraryService {
  constructor(
    private readonly repository: LibraryRepository,
    private readonly fileService: FileService,
    private readonly configService: ConfigService,
  ) {}
  create(createLibraryDto: CreateLibraryDto): Promise<Library> {
    return this.repository.create(createLibraryDto);
  }

  findAll() {
    return `This action returns all library`;
  }

  find(id: string): Promise<Library> {
    const doc = this.repository.findById(id);
    if (doc) {
      return doc;
    }
    throw new NotFoundException();
  }

  update(id: string, updateLibraryDto: UpdateLibraryDto): Promise<Library> {
    return this.repository.findByIdAndUpdate(id, updateLibraryDto);
  }

  async remove(id: string): Promise<void> {
    // 1. Fetch doc from db
    const fileDoc = await this.find(id);

    // 2. Delete file for s3
    const key = fileDoc.path;
    const res = await this.fileService.delete(key);

    // 3. If successfully deleted from s3 then delete from db
    if (res) {
      await this.repository.findByIdAndDelete(id);
    }
  }

  async upload(file: Express.Multer.File, path: string) {
    const s3FilePath = await this.fileService.upload(file, path);
    const filePayload: CreateLibraryDto = {
      name: file.originalname,
      type: file.mimetype,
      path: s3FilePath.path,
    };
    return await this.create(filePayload);
  }
}
