import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Notes from '../schema/notes.schema';
import { Model } from 'mongoose';
import { UpdateNoteDto } from '../dto/update-note.dto';

@Injectable()
export default class NotesRepository {
  constructor(
    @InjectModel(Notes.name)
    private readonly model: Model<Notes>,
  ) {}

  async create(note: Notes): Promise<Notes> {
    const doc = await this.model.create(note);
    return doc;
  }

  async findById(id: string): Promise<Notes> {
    const doc = await this.model.findById(id).lean();
    return doc;
  }

  async findByIdAndUpdate(id: string, note: UpdateNoteDto): Promise<Notes> {
    const doc = await this.model.findByIdAndUpdate(id, note, { new: true });
    return doc;
  }

  async findByIdAndDelete(id: string): Promise<null> {
    await this.model.findByIdAndDelete(id);
    return;
  }
}
