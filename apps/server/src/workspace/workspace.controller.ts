import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import WorkspaceService from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import Workspace from './schema/workspace.schema';

@Controller('workspace')
export default class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  create(@Body() createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    return this.workspaceService.create(createWorkspaceDto);
  }

  @Get()
  findAll() {
    return this.workspaceService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): Promise<Workspace> {
    return this.workspaceService.find(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdateWorkspaceDto,
  ): Promise<Workspace> {
    return this.workspaceService.update(id, updateWorkspaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<null> {
    return this.workspaceService.remove(id);
  }
}
