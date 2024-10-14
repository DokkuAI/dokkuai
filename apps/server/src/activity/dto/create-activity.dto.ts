import { IsEnum, IsMongoId, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ActivityType, IActivity } from '../schema/activity.schema';
import { Types } from 'mongoose';
import { Type } from 'class-transformer';

export class CreateActivityDto implements IActivity {
  @IsEnum(ActivityType)
  type: ActivityType;

  @IsOptional()
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsMongoId()
  workspaceId: Types.ObjectId;
}
