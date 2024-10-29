import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { MindmapService } from './mindmap.service';
import { CreateMindmapDto } from './dto/create-mindmap.dto';
import { UpdateMindmapDto } from './dto/update-mindmap.dto';
import { Types } from 'mongoose';

@Controller('mindmap')
export class MindmapController {
  constructor(private readonly mindmapService: MindmapService) {}

  @Post()
  create(@Body() createMindmapDto: CreateMindmapDto, @Req() request: any) {
    return this.mindmapService.create(
      createMindmapDto,
      request.user._id,
      request.user.firstName,
    );
  }

  @Get()
  findAll() {
    return this.mindmapService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mindmapService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMindmapDto: UpdateMindmapDto) {
    return this.mindmapService.update(+id, updateMindmapDto);
  }

  @Put(':id')
  saveMindmap(
    @Param('id') id: Types.ObjectId,
    @Body() saveMindmap: CreateMindmapDto,
  ) {
    return this.mindmapService.saveMindmap(saveMindmap, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mindmapService.remove(+id);
  }
}
