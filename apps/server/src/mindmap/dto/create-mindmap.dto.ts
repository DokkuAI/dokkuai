import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMindmapDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    path: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
