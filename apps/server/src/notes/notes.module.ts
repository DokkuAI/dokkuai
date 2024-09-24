import { Module } from '@nestjs/common';
import NoteService from './notes.service';
import NotesController from './notes.controller';
import NotesRepository from './repository/notes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import Note, { NoteSchema } from './schema/notes.schema';
import UtilsModule from 'src/utils/utils.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]), UtilsModule
  ],
  controllers: [NotesController],
  providers: [NoteService, NotesRepository],
})
export default class NotesModule {}
