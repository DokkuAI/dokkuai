import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import WorkspaceRepository from './repository/workspace.repository';
import Workspace from './schema/workspace.schema';

@Injectable()
export class WorkspaceService {
  constructor(private readonly repository: WorkspaceRepository) {}

  async create(createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    return this.repository.create(createWorkspaceDto);
  }

  findAll() {
    return `This action returns all workspace`;
  }

  find(id: string): Promise<Workspace> {
    return this.repository.findById(id);
  }

  update(
    id: string,
    updateWorkspaceDto: UpdateWorkspaceDto,
  ): Promise<Workspace> {
    return this.repository.findByIdAndUpdate(id, updateWorkspaceDto);
  }

  remove(id: string): Promise<null> {
    return this.repository.findByIdAndDelete(id);
  }
}
