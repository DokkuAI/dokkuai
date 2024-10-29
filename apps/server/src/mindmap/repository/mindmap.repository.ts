import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Mindmap from '../schema/mindmap.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class MindmapRepository {
  constructor(
    @InjectModel(Mindmap.name)
    private readonly model: Model<Mindmap>,
  ) {}

  async create(mindmap: Mindmap): Promise<Mindmap> {
    const doc = await this.model.create(mindmap);
    return doc;
  }

  async findById(id: Types.ObjectId): Promise<Mindmap> {
    const doc = await this.model.findById(id).lean();
    return doc;
  }
}
