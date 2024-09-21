import { Module } from '@nestjs/common';
import NotesService from './notes.service';
import NotesController from './notes.controller';
import NotesRepository from './repository/notes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import Notes, { NotesSchema } from './schema/notes.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Notes.name, schema: NotesSchema}])],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export default class NotesModule {}
