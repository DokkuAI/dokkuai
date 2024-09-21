import { IsEmail, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DesignationType, IUser, Size, WorkType } from '../schema/user.schema';
import { Type } from 'class-transformer';

class AboutUserDto {
  @IsEnum(WorkType)
  work: WorkType;

  @IsEnum(DesignationType)
  designation: DesignationType;

  @IsEnum(Size)
  size: Size;

  @IsString()
  description: string;
}

export class CreateUserDto implements IUser {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @ValidateNested()
    @Type(() => AboutUserDto)
    about: AboutUserDto;
}
