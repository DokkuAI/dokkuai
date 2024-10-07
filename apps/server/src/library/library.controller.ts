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
  Req,
  Query,
} from '@nestjs/common';
import LibraryService from './library.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import Library from './schema/library.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { Types } from 'mongoose';

@Controller('library')
export default class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  create(
    @Body() createLibraryDto: CreateLibraryDto,
    @Req() request: any,
  ): Promise<Library> {
    return this.libraryService.create(createLibraryDto, request.user._id);
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
    @Req()
    request: any,
    file: Express.Multer.File,
  ) {
    return await this.libraryService.upload(request.user._id, file, 'temp');
  }
  @Get()
  find(@Req() request: any, @Query() params: any) {
    const offset = +params.offset;
    return this.libraryService.findAll({ userId: request.user._id }, offset);
  }

  @Get(':id')
  findAll(@Param('id') id: Types.ObjectId, @Query() params: any) {
    const offset = +params.offset;
    return this.libraryService.findAll({ projectId: id }, offset);
  }

  @Get('/find/:id')
  findOne(@Param('id') id: string): Promise<string> {
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
