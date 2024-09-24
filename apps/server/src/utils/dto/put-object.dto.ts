import { IsString } from 'class-validator';

export default class PutObjectDto {
  @IsString()
  path: string;
}
