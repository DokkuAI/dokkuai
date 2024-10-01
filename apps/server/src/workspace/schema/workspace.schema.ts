import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export enum WorkspaceType {
  PERSONAL = 'personal',
  TEAM = 'team',
}

export interface IWorkspace {
  name?: string;
  type: WorkspaceType;
  invites?: string[];
}

@Schema({ timestamps: true })
export default class Workspace implements IWorkspace {
  @Prop()
  name?: string;

  @Prop({ required: true, type: String, enum: WorkspaceType })
  type: WorkspaceType;

  @Prop({ type: [String] })
  invites?: string[];

  @Prop({ required: true, ref: 'User', type: SchemaTypes.ObjectId })
  userId: Types.ObjectId;
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);
