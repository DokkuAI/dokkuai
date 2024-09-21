import { IsArray, IsOptional, IsString } from "class-validator";
import { INote } from "../schema/notes.schema";

export class CreateNoteDto implements INote {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  date: string;

  @IsString()
  @IsOptional()
  link?: string;

  @IsString()
  @IsOptional()
  page: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsString()
  createdBy: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  size?: string;
}
