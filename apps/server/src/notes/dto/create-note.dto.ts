import { IsArray, IsOptional, IsString } from 'class-validator';
import { INote, INoteContent } from '../schema/notes.schema';

export class CreateNoteDto implements INoteContent {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  linkTo?: string;

  @IsString()
  @IsOptional()
  page?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsString()
  createdBy: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsString()
  @IsOptional()
  size?: string;

  @IsString()
  @IsOptional()
  path: string;
}
