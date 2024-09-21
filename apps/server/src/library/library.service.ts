import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import LibraryRepository from './repository/library.repository';

@Injectable()
export class LibraryService {
  constructor(private readonly repository: LibraryRepository){}
  create(createLibraryDto: CreateLibraryDto) {
    return this.repository.create(createLibraryDto);
  }

  findAll() {
    return `This action returns all library`;
  }

  findOne(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, updateLibraryDto: UpdateLibraryDto) {
    return this.repository.findByIdAndUpdate(id, updateLibraryDto);
  }

  remove(id: string) {
    return this.repository.findByIdAndDelete(id);
  }
}
