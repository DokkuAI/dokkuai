import { IsArray, IsBoolean, IsMimeType, IsMongoId, IsOptional, IsString } from "class-validator";
import { IFile } from "../schema/library.schema";
import { Types } from "mongoose";

export class CreateLibraryDto implements IFile {
  // @IsEnum(FileType)
  @IsMimeType()
  type: string;

  @IsString()
  name: string;

  @IsString()
  path: string;

  @IsOptional()
  @IsString()
  year?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsString()
  @IsOptional()
  abstract?: string;

  @IsMongoId()
  @IsOptional()
  projectId?: Types.ObjectId;

  @IsBoolean()
  pinned: boolean;
}
