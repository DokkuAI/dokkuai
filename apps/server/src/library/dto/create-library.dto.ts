import { IsArray, IsEnum, IsOptional, IsString } from "class-validator";
import { FileType, IFile } from "../schema/library.schema";

export class CreateLibraryDto implements IFile {

    @IsEnum(FileType)
    type: FileType;

    @IsString()
    title: string;

    @IsString()
    year: string;

    @IsString()
    author: string;

    @IsArray()
    @IsString({each: true})
    tags: string[];

    @IsString()
    @IsOptional()
    abstract?: string;
}
