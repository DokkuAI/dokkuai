import { IsArray, IsEnum, IsMimeType, IsOptional, IsString } from "class-validator";
import { FileType, IFile } from "../schema/library.schema";

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
    @IsString({each: true})
    @IsOptional()
    tags?: string[];

    @IsString()
    @IsOptional()
    abstract?: string;
}
