import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  async findById(id: string): Promise<Activity> {
    const doc = await this.model.findById(id);
    return doc;
  }

  async find(query: any): Promise<Activity[]> {
    const doc = await this.model.find(query);
    return doc;
  }
}
