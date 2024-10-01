import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export enum FileType {
  PDF = 'pdf',
  LINK = 'link',
  OTHER = 'other',
}

export interface IFile {
  type: string;
  name: string;
  year?: string;
  author?: string;
  tags?: string[];
  abstract?: string;
  path: string;
}

@Schema({ timestamps: true })
export default class Library implements IFile {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  path: string;

  @Prop({ required: true, type: String })
  type: string;

  @Prop()
  year?: string;

  @Prop()
  author?: string;

  @Prop({ type: [String] })
  tags?: string[];

  @Prop()
  abstract?: string;

  @Prop({ required: true, ref: 'User', type: SchemaTypes.ObjectId })
  userId: Types.ObjectId;
}

export const LibrarySchema = SchemaFactory.createForClass(Library);