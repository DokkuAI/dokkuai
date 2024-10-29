import { PartialType } from '@nestjs/mapped-types';
import { CreateMindmapDto } from './create-mindmap.dto';

export class UpdateMindmapDto extends PartialType(CreateMindmapDto) {}
