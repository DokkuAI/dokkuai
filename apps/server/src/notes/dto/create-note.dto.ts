import { IsArray, IsOptional, IsString } from "class-validator";
import { INote } from "../schema/notes.schema";

export class CreateNoteDto implements INote {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  linkTo?: string;

  @IsString()
  @IsOptional()
  page: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsString()
  createdBy: string;

  @IsString()
  @IsOptional()
  contentUrl: string;

  @IsString()
  @IsOptional()
  size?: string;
}
