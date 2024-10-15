import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import NotesRepository from './repository/notes.repository';
import Notes from './schema/notes.schema';
import FileService from 'src/utils/files/file.service';
import SaveNoteDto from './dto/save-note.dto';
import { Types } from 'mongoose';

@Injectable()
export default class NoteService {
  constructor(
    private readonly repository: NotesRepository,
    private readonly fileService: FileService,
  ) {}
  async create(
    createNoteDto: CreateNoteDto,
    userId: Types.ObjectId,
  ): Promise<Notes> {
    const doc = await this.repository.create({
      ...createNoteDto,
      userId: userId,
    });
    await this.upload({ content: createNoteDto.content, path: 'temp', name: doc._id });
    return doc;
  }

  async findAll(query: any, offset: number): Promise<Notes[]> {
    return await this.repository.find(query, offset);
  }

  async findOne(id: Types.ObjectId): Promise<any> {
    // 1. fetch doc from db
    const doc = await this.repository.findById(id);
    if (doc) {
      // 2. fetch content from s3
      const key = doc.path;
      const file = await this.fileService.getFile(key);
      return file;
    }
    throw new NotFoundException();
  }

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<Notes> {
    return await this.repository.findByIdAndUpdate(id, updateNoteDto);
  }

  async saveNote(saveNoteDto: SaveNoteDto, id: Types.ObjectId): Promise<string> {
    const doc = await this.repository.findById(id);
    const noteData = {
      name: doc.name,
      content: saveNoteDto.content,
      path: doc.path.split('/').slice(0, -1).join('/').replace(/\/$/, ''), //path -> userId/notes/file_name.json
    };
    await this.upload(noteData);
    return;
  }

  async remove(id: Types.ObjectId): Promise<void> {
    // 1. Fetch doc from db
    const fileDoc = await this.repository.findById(id);

    // 2. Delete file for s3
    const key = fileDoc.path;
    const res = await this.fileService.delete(key);

    // 3. If successfully deleted from s3 then delete from db
    if (res) {
      await this.repository.findByIdAndDelete(id);
    }
  }

  async upload(noteData: { name: string; content: string; path: string }) {
    const notePayload = {
      name: noteData?.name ?? new Types.ObjectId().toString(),
      type: 'json',
      content: Buffer.from(noteData.content, 'utf-8'),
    };
    return await this.fileService.uploadJSON(notePayload, noteData.path);
  }
}
