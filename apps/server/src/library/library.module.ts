import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import LibraryRepository from './repository/library.repository';
import { MongooseModule } from '@nestjs/mongoose';
import Library, { LibrarySchema } from './schema/library.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Library.name, schema: LibrarySchema}])],
  controllers: [LibraryController],
  providers: [LibraryService, LibraryRepository],
})
export class LibraryModule {}
