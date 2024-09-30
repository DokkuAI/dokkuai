import { Module } from '@nestjs/common';
import LibraryService from './library.service';
import LibraryController from './library.controller';
import LibraryRepository from './repository/library.repository';
import { MongooseModule } from '@nestjs/mongoose';
import Library, { LibrarySchema } from './schema/library.schema';
import UtilsModule from 'src/utils/utils.module';
import ValidateGuard from 'src/guard/validate.guard';

@Module({
  imports:[MongooseModule.forFeature([{name: Library.name, schema: LibrarySchema}]), UtilsModule],
  controllers: [LibraryController],
  providers: [LibraryService, LibraryRepository],
})
export default class LibraryModule {}
