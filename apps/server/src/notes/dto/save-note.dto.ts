import { IsNotEmpty, IsString } from 'class-validator';

export default class SaveNoteDto {
  @IsNotEmpty()
  @IsString()
  content: string;
}
