import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import WorkspaceRepository from './repository/workspace.repository';
import Workspace from './schema/workspace.schema';
import { Types } from 'mongoose';

@Injectable()
export default class WorkspaceService {
  constructor(private readonly repository: WorkspaceRepository) {}

  async create(createWorkspaceDto: CreateWorkspaceDto, userId: Types.ObjectId): Promise<Workspace> {
    return this.repository.create({...createWorkspaceDto, userId: userId});
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
