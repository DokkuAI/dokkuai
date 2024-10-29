import { IsNotEmpty, IsString } from "class-validator";

export class CreateMindmapDto {

    @IsNotEmpty()
    @IsString()
    content: string;
}
