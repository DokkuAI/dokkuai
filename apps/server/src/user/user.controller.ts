import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import UserService from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './schema/user.schema';
import { Types } from 'mongoose';
import { Public } from 'src/decorators/isPublic.decorator';

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

  @Patch()
  update(
    @Req() request: any,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(request.user._id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Types.ObjectId): Promise<null> {
    return this.userService.remove(id);
  }
}
