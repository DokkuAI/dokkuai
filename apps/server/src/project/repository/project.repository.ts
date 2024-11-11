import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Project from '../schema/project.schema';
import { UpdateProjectDto } from '../dto/update-project.dto';

@Injectable()
export default class ProjectRepository {
  constructor(
    @InjectModel(Project.name)
    private readonly model: Model<Project>,
  ) {}

  async create(project: Project): Promise<Project> {
    const doc = await this.model.create(project);
    return doc;
  }

  async find(query: any): Promise<Project[]> {
    const doc = await this.model.find(query);
    return doc;
  }

  async findById(id: string): Promise<Project> {
    const doc = await this.model.findById(id).lean();
    return doc;
  }

  async findByIdAndUpdate(id: string, project: UpdateProjectDto): Promise<Project> {
    const doc = await this.model.findByIdAndUpdate(id, project, { new: true });
    return doc;
  }

  async findByIdAndDelete(id: string): Promise<null> {
    await this.model.findByIdAndDelete(id);
    return;
  }
}
