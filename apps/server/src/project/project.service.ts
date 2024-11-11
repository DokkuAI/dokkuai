import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import ProjectRepository from './repository/project.repository';
import Project from './schema/project.schema';
import { Types } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(private readonly repository: ProjectRepository) {}
  async create(
    createProjectDto: CreateProjectDto,
    userId: Types.ObjectId,
    userName: string,
  ): Promise<Project> {
    return await this.repository.create({
      ...createProjectDto,
      userId: userId,
      createdBy: userName,
    });
  }

  async findAll(userId: Types.ObjectId): Promise<Project[]> {
    return await this.repository.find({ userId: userId });
  }

  async findOne(id: string): Promise<Project> {
    return await this.repository.findById(id);
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return await this.repository.findByIdAndUpdate(id, updateProjectDto);
  }

  async remove(id: string): Promise<null> {
    return await this.repository.findByIdAndDelete(id);
  }
}
