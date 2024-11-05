import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Mindmap from '../schema/mindmap.schema';
import { Model, Types } from 'mongoose';
import { UpdateMindmapDto } from '../dto/update-mindmap.dto';

@Injectable()
export class MindmapRepository {
  constructor(
    @InjectModel(Mindmap.name)
    private readonly model: Model<Mindmap>,
  ) {}

  async create(mindmap: Mindmap): Promise<Mindmap> {
    return await this.model.create(mindmap);
  }

  async findById(id: Types.ObjectId): Promise<Mindmap> {
    return await this.model.findById(id).lean();
  }

  async findByIdAndUpdate(id: Types.ObjectId, note: UpdateMindmapDto): Promise<Mindmap> {
    const doc = await this.model.findByIdAndUpdate(id, note, { new: true });
    return doc;
  }

  async findByIdAndDelete(id: Types.ObjectId): Promise<void> {
    return await this.model.findByIdAndDelete(id);
  }
}
