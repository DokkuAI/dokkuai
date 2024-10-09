import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export interface INote {
   linkTo?: string;
  page?: string;
  tags?: string[];
  createdBy: string;
  size?: string;
  path: string;
  projectId?: Types.ObjectId;
  pinned: boolean;
}

export interface INoteContent extends INote {
  content: string;
}

@Schema({ timestamps: true })
export default class Note implements INote {
  @Prop({ required: true })
  name: string;

  @Prop()
  linkTo?: string;

  @Prop()
  page?: string;

  @Prop({ type: [String] })
  tags?: string[];

  @Prop({ required: true })
  createdBy: string;

  @Prop()
  size?: string;

  @Prop()
  path: string;

  @Prop({ required: true, ref: 'User', type: SchemaTypes.ObjectId })
  userId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Project' })
  projectId?: Types.ObjectId;

  @Prop({required: true})
  pinned: boolean;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
