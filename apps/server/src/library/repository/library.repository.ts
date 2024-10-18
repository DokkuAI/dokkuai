import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import Library from '../schema/library.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateLibraryDto } from '../dto/update-library.dto';

@Injectable()
export default class LibraryRepository {
  constructor(
    @InjectModel(Library.name)
    private readonly model: Model<Library>,
  ) {}

  async create(library: Library): Promise<Library> {
    const doc = await this.model.create(library);
    return doc;
  }

  async find(query: any, offset: number, limit: number): Promise<any> {
    const doc = await this.model
      .find(query)
      .limit(limit)
      .skip(offset);
    const totalFiles = await this.model.countDocuments(query);
    console.log({ files: doc, totalFiles: totalFiles });
    return { files: doc, totalFiles: totalFiles};
  }

  async findById(id: Types.ObjectId): Promise<Library> {
    const doc = await this.model.findById(id);
    return doc;
  }

  async findByIdAndUpdate(
    id: Types.ObjectId,
    updateLibraryDto: UpdateLibraryDto,
  ): Promise<Library> {
    const doc = await this.model.findByIdAndUpdate(id, updateLibraryDto, {
      new: true,
    });
    return doc;
  }

  async findByIdAndDelete(id: Types.ObjectId): Promise<null> {
    await this.model.findByIdAndDelete(id);
    return;
  }
}
