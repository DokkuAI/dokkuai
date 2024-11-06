import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMindmapDto {

    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
