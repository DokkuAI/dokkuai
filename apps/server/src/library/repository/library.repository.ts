import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import Library, { IFile } from '../schema/library.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateLibraryDto } from '../dto/update-library.dto';

@Injectable()
export default class LibraryRepository {
  constructor(
    @InjectModel(Library.name)
    private readonly model: Model<Library>,
  ) {}

  async create(file: IFile): Promise<Library> {
    const doc = await this.model.create(file);
    return doc;
  }

  async findById(id: string): Promise<Library> {
    const doc = await this.model.findById(id);
    return doc;
  }

  async findByIdAndUpdate(id: string, user: UpdateLibraryDto): Promise<Library> {
    const doc = await this.model.findByIdAndUpdate(id, user, {new: true});
    return doc;
  }

  async findByIdAndDelete(id: string): Promise<null> {
    await this.model.findByIdAndDelete(id);
    return;
  }
}
