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
  Query,
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
  create(
    @Body() createNoteDto: CreateNoteDto,
    @Req() request: any,
  ): Promise<Note> {
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
  find(@Req() request: any, @Query() params: any): Promise<Note[]> {
    const offset = +params.offset;
    return this.notesService.findAll({ userId: request.user._id }, offset);
  }

  @Get(':id')
  findAll(@Param('id') id: string, @Query() params: any): Promise<Note[]> {
    const offset = +params.offset;
    return this.notesService.findAll({ projctId: id }, offset);
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
