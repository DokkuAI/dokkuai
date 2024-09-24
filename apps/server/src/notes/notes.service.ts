import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import NotesRepository from './repository/notes.repository';
import Note from './schema/notes.schema';
import { SchemaType, SchemaTypes, Types } from 'mongoose';
import FileService from 'src/utils/files/file.service';

@Injectable()
export default class NoteService {
  constructor(
    private readonly repository: NotesRepository,
    private readonly fileService: FileService,
  ) {}
  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const res = await this.upload(createNoteDto, 'temp');
    
    return this.repository.create({...createNoteDto, path: res.path});
  }

  findAll() {
    return `This action returns all notes`;
  }

  async find(id: string): Promise<Note> {
    const doc = await this.repository.findById(id);
    if (doc) {
      return doc;
    }
    throw new NotFoundException();
  }

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<Note | void> {
    //step 1: if content is present
    //step 2: if content is present then upload to s3
    //step 2.1: fetch path from db
    //step 2.2:
    //step 3: else update db
    if (updateNoteDto.content) {
      const doc = await this.find(id);
      const noteData = {
        name: doc.name,
        content: updateNoteDto.content,
      };
      await this.upload(noteData, doc.path);
      return;
    } 
    return this.repository.findByIdAndUpdate(id, updateNoteDto);
  }

  remove(id: string): Promise<null> {
    return this.repository.findByIdAndDelete(id);
  }

  async upload(noteData: CreateNoteDto | UpdateNoteDto, path: string) {
    const notePayload = {
      name: noteData?.name ?? new Types.ObjectId().toString(),
      type: 'json',
      content: Buffer.from(noteData.content, 'utf-8'),
    };
    return await this.fileService.uploadJSON(notePayload, path);
  }
}
