import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
  UseInterceptors,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import LibraryService from './library.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import Library from './schema/library.schema';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('library')
export default class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  create(@Body() createLibraryDto: CreateLibraryDto): Promise<Library> {
    return this.libraryService.create(createLibraryDto);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 50 * 1024 * 1024,
            message: 'Max file size exceeded',
          }),
          new FileTypeValidator({
            fileType: 'application/pdf',
          }),
        ],
      }),                                           
    )
    file: Express.Multer.File,
  ) {
    return await this.libraryService.upload(file, 'temp');
  }

  @Get()
  findAll() {
    return this.libraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Library> {
    return this.libraryService.find(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLibraryDto: UpdateLibraryDto,
  ): Promise<Library> {
    return this.libraryService.update(id, updateLibraryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.libraryService.remove(id);
  }
}
