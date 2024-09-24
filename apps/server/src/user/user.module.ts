import { Module } from '@nestjs/common';
import UserService from './user.service';
import UserController from './user.controller';
import UserRepository from './repository/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import User, { UserSchema } from './schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})
export default class UserModule {}
