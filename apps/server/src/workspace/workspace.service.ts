import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import WorkspaceRepository from './repository/workspace.repository';
import Workspace from './schema/workspace.schema';
import { Types } from 'mongoose';
import UserService from 'src/user/user.service';

@Injectable()
export default class WorkspaceService {
  constructor(private readonly repository: WorkspaceRepository, private readonly userService: UserService) {}

  async create(createWorkspaceDto: CreateWorkspaceDto, userId: Types.ObjectId): Promise<Workspace> {
    const doc:any = await this.repository.create({...createWorkspaceDto, userId: userId});
    await this.userService.update(userId, {workspaceId: doc._id});
    return doc;
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
