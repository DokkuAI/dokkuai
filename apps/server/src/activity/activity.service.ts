import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import Activity from './schema/activity.schema';
import ActivityRepository from './repository/activity.repository';
import { Types } from 'mongoose';

@Injectable()
export default class ActivityService {
  constructor(private readonly repository: ActivityRepository) {}

  async create(
    createActivityDto: CreateActivityDto,
    userId: Types.ObjectId,
    workspaceId: Types.ObjectId,
  ): Promise<Activity> {
    return this.repository.create({ ...createActivityDto, userId: userId, workspaceId: workspaceId });
  }

  async findAll(query: any, offset: number): Promise<Activity[]> {
    return await this.repository.find(query, offset);
  }

  async find(id: Types.ObjectId): Promise<Activity> {
    return this.repository.findById(id);
  }
}
