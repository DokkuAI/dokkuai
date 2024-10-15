import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export enum ActivityType {
  CREATED_WORKSPACE = 'created-workspace',
  CREATED_NOTE = 'created-note',
  IMPORTED_FILE = 'imported-file',
  ADDED = 'added',
  DELETED = 'deleted',
}

export interface IActivity {
  type: ActivityType;
  title: string;
}

@Schema({ timestamps: true })
export default class Activity implements IActivity {
  @Prop({ type: SchemaTypes.ObjectId, required: true, ref: 'Workspace' })
  workspaceId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, required: true, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ required: true, type: String, enum: ActivityType })
  type: ActivityType;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  title: string;
}


export const ActivitySchema = SchemaFactory.createForClass(Activity);
