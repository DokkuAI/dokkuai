import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateMindmapDto } from './create-mindmap.dto';

export class UpdateMindmapDto extends PartialType(CreateMindmapDto) {
  @IsString()
  @IsOptional()
  path: string;
}
