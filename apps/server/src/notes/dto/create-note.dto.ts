import { IsArray, IsBoolean, IsMongoId, IsOptional, IsString } from 'class-validator';
import { INote, INoteContent } from '../schema/notes.schema';
import { Types } from 'mongoose';

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
  content: string;

  @IsString()
  @IsOptional()
  size?: string;

  @IsMongoId()
  @IsOptional()
  path: string;

  @IsMongoId()
  @IsOptional()
  projectId?: Types.ObjectId;

  @IsBoolean()
  pinned: boolean;
}
