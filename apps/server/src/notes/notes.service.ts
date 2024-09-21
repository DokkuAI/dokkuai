import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import NotesRepository from './repository/notes.repository';
import Notes from './schema/notes.schema';

@Injectable()
export default class NotesService {
  constructor(private readonly repository: NotesRepository) {}
  create(createNoteDto: CreateNoteDto): Promise<Notes> {
    return this.repository.create(createNoteDto);
  }

  findAll() {
    return `This action returns all notes`;
  }

  find(id: string): Promise<Notes> {
    return this.repository.findById(id);
  }

  update(id: string, updateNoteDto: UpdateNoteDto): Promise<Notes> {
    return this.repository.findByIdAndUpdate(id, updateNoteDto);
  }

  remove(id: string): Promise<null> {
    return this.repository.findByIdAndDelete(id);
  }
}
