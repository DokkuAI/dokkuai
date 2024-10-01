import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './schema/user.schema';
import UserRepository from './repository/user.repository';
import { LoggerService } from 'src/utils/helper/logger.service';

@Injectable()
export default class UserService {
  private readonly repository: UserRepository;
  constructor(
    repository: UserRepository,
    private readonly logger: LoggerService,
  ) {
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

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.repository.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<null> {
    return this.repository.findByIdAndDelete(id);
  }
}
