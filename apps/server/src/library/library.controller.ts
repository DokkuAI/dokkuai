import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import LibraryService from './library.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import Library from './schema/library.schema';

@Controller('library')
export default class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  create(@Body() createLibraryDto: CreateLibraryDto): Promise<Library> {
    return this.libraryService.create(createLibraryDto);
  }

  @Get()
  findAll(){
    return this.libraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Library> {
    return this.libraryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLibraryDto: UpdateLibraryDto,
  ): Promise<Library> {
    return this.libraryService.update(id, updateLibraryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<null> {
    return this.libraryService.remove(id);
  }
}
