import { IsEmail, IsEnum, IsMongoId, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DesignationType, IUser, Size, WorkType } from '../schema/user.schema';
import { Type } from 'class-transformer';
import {  Types } from 'mongoose';

class AboutUserDto {
  
  @IsEnum(WorkType)
  @IsOptional()
  work?: WorkType;

  @IsEnum(DesignationType)
  @IsOptional()
  designation?: DesignationType;

  @IsEnum(Size)
  @IsOptional()
  size?: Size;

  @IsString()
  @IsOptional()
  description?: string;
}

export class CreateUserDto implements IUser {
  @IsString()
  externalId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @ValidateNested()
  @Type(() => AboutUserDto)
  @IsOptional()
  about?: AboutUserDto;

  @IsMongoId()
  @IsOptional()
  workspaceId: Types.ObjectId;
}
