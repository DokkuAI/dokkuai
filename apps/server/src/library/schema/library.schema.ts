import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum FileType {
  PDF = 'pdf',
  LINK = 'link',
  OTHER = 'other',
}

export interface IFile {
  type: FileType;
  title: string;
  year: string;
  author: string;
  tags: string[];
}

@Schema({timestamps: true})
export default class Library implements IFile {
  @Prop({ required: true, enum: FileType, type: String })
  type: FileType;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true, type: [String] })
  tags: string[];

}

export const LibrarySchema = SchemaFactory.createForClass(Library);