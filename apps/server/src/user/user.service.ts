import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './schema/user.schema';
import UserRepository from './repository/user.repository';
import { ObjectId } from 'mongoose';

@Injectable()
export class UserService {
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

  async find(id: string) {
    return this.repository.findById(id);
  }

  async update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  async remove(id: ObjectId) {
    return this.repository.remove(id);
  }
}
