import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import LibraryRepository from './repository/library.repository';
import Library from './schema/library.schema';
import FileService from 'src/utils/files/file.service';

@Injectable()
export default class LibraryService {
  constructor(
    private readonly repository: LibraryRepository,
    private readonly fileService: FileService,
  ) {}
  create(createLibraryDto: CreateLibraryDto): Promise<Library> {
    return this.repository.create(createLibraryDto);
  }

  findAll() {
    return `This action returns all library`;
  }

  findOne(id: string): Promise<Library> {
    return this.repository.findById(id);
  }

  update(id: string, updateLibraryDto: UpdateLibraryDto): Promise<Library> {
    return this.repository.findByIdAndUpdate(id, updateLibraryDto);
  }

  remove(id: string): Promise<null> {
    return this.repository.findByIdAndDelete(id);
  }

  async upload(file: Express.Multer.File, path: string) {
    const s3FilePath   = await this.fileService.upload(file, path);
    const filePayload: CreateLibraryDto = {
      name: file.originalname,
      type: file.mimetype,
      path: s3FilePath.path
    };
    return await this.create(filePayload);
  }

  async delete({key, id}: {key: string, id: string}) {
    const destinationBucket = 'dokku-assets';
    await this.fileService.delete(key, destinationBucket);
    return await this.remove(id);
  }
}
