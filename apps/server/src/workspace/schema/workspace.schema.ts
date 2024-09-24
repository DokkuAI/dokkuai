import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);
