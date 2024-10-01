import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export enum Size {
  INDIVISUAL = '0-1',
  VERY_SMAll = '2-10',
  SMALL = '11-50',
  MEDIUM = '51-200',
  BIG = '201-500',
  VERY_BIG = '501-1000',
  LARGE = '1001-5000',
  ORGANISATION = '5000+',
}

export enum DesignationType {
  ENGINEER = 'engineer',
  MANAGER = 'manager',
  RESEARCHER = 'researcher',
  EXECUTIVE = 'executive',
  FREELANCER = 'freelancer',
  OTHER = 'other',
}

export enum WorkType {
  ENGINEER = 'engineer',
  MANAGER = 'manager',
  RESEARCHER = 'researcher',
  OTHER = 'other',
}

export interface IUser {
  externalId: string;
  firstName: string;
  lastName: string;
  email: string;
  about?: {
    work?: WorkType;
    designation?: DesignationType;
    size?: Size;
    description?: string;
  };
}

@Schema({ _id: false })
class AboutUser {
  @Prop({type: String, enum: WorkType })
  work?: WorkType;

  @Prop({ type: String, enum: DesignationType })
  designation?: DesignationType;

  @Prop({ type: String, enum: Size })
  size?: Size;

  @Prop({ required: true })
  description?: string;
}

@Schema({ timestamps: true })
export default class User implements IUser {
  @Prop({ required: true })
  externalId: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: AboutUser })
  about?: AboutUser;

  @Prop({ required: true, ref: 'Workspace', type: [SchemaTypes.ObjectId] })
  workspaces: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
