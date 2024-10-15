import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import UserService from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './schema/user.schema';
import { Types } from 'mongoose';

@Controller('user')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): Promise<User> {
    return this.userService.find(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: Types.ObjectId
    ,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Types.ObjectId): Promise<null> {
    return this.userService.remove(id);
  }
}
