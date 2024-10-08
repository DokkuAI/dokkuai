import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import Activity from '../schema/activity.schema';

@Injectable()
export default class ActivityRepository {
  constructor(
    @InjectModel(Activity.name)
    private readonly model: Model<Activity>,
  ) {}

  async create(activity: Activity): Promise<Activity> {
    const doc = await this.model.create(activity);
    return doc;
  }

  async findById(id: Types.ObjectId): Promise<Activity> {
    const doc = await this.model.findById(id);
    return doc;
  }

  async find(query: any, offset: number): Promise<any> {
    const doc = await this.model.find(query).limit(10).skip(offset);
    const totalFiles = await this.model.countDocuments(query);
    return { files: doc, totalFiles: totalFiles };
  }
}
