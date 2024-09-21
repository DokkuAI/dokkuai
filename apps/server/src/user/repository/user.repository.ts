import { InjectModel } from '@nestjs/mongoose';
import User from '../schema/user.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export default class UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly model: Model<User>,
  ) {}

  async create(user: User): Promise<User> {
    const doc = await this.model.create(user);
    return doc;
  }

  async findById(id: string): Promise<User> {
    const doc = await this.model.findById(id);
    return doc;
  }

  async findByIdAndUpdate(id: string, user: UpdateUserDto): Promise<User> {
    const doc = await this.model.findByIdAndUpdate(id, user);
    return doc;
  }

  async findByIdAndDelete(id: string): Promise<null> {
    await this.model.findByIdAndDelete(id);
    return;
  }
}
