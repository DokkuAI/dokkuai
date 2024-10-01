import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import User from 'src/user/schema/user.schema';

export interface INote {
  name: string;
  linkTo?: string;
  page?: string;
  tags?: string[];
  createdBy: string;
  size?: string;
  path: string;
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

  @Prop({ required: true })
  path: string;
  
  @Prop({ required: true, ref: "User" , type: SchemaTypes.ObjectId})
  userId: Types.ObjectId;
  // user: User
}

export const NoteSchema = SchemaFactory.createForClass(Note);
