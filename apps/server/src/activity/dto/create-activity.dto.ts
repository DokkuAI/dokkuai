import { IsEnum, IsMongoId, IsString, ValidateNested } from 'class-validator';
import { ActivityType, IActivity } from '../schema/activity.schema';
import { Types } from 'mongoose';
import { Type } from 'class-transformer';

export class CreateActivityDto implements IActivity {
  @IsEnum(ActivityType)
  type: ActivityType;

  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsMongoId()
  workspaceId: Types.ObjectId;
}
