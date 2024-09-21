import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export interface INote {
  name: string;
  link?: string;
  page?: string;
  tags: string[];
  createdBy: string;
  url?: string;
  size?: string;
}

@Schema({timestamps: true})
export default class Notes implements INote {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: string;

  @Prop()
  link?: string;

  @Prop()
  page?: string;

  @Prop({ required: true, type: [String] })
  tags: string[];

  @Prop({ required: true })
  createdBy: string;

  @Prop()
  url?: string;

  @Prop()
  size?: string;
}

export const NotesSchema = SchemaFactory.createForClass(Notes);