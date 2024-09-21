import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import LibraryRepository from './repository/library.repository';
import Library from './schema/library.schema';

@Injectable()
export default class LibraryService {
  constructor(private readonly repository: LibraryRepository) {}
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
}
