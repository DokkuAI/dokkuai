import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './schema/user.schema';
import UserRepository from './repository/user.repository';
import { Types } from 'mongoose';

@Injectable()
export default class UserService {
  private readonly repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.repository.create(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  async find(id: string): Promise<User> {
    return this.repository.findById(id);
  }

  async findOne(query: any): Promise<User> {
    return this.repository.findOne(query);
  }

  async update(
    id: Types.ObjectId,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.repository.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: Types.ObjectId): Promise<null> {
    return this.repository.findByIdAndDelete(id);
  }
}
