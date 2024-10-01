import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Req,
} from '@nestjs/common';
import NoteService from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import Note from './schema/notes.schema';
import SaveNoteDto from './dto/save-note.dto';
@Controller('notes')
export default class NotesController {
  constructor(private readonly notesService: NoteService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto, @Req() request: any): Promise<Note> {
    return this.notesService.create(createNoteDto, request.user._id);
  }

  // @HttpCode(HttpStatus.ACCEPTED)
  @Put(':id')
  saveNote(
    @Param('id') id: string,
    @Body() saveNoteDto: SaveNoteDto,
  ): Promise<string> {
    return this.notesService.saveNote(saveNoteDto, id);
  }

  @Get()
  findAll(@Req() request: any) {
    return this.notesService.findAll(request.user._id);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Note> {
    return this.notesService.find(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ): Promise<Note | void> {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.notesService.remove(id);
  }
}
