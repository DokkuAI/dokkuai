import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export interface INote {
  name: string;
  linkTo?: string;
  page?: string;
  tags?: string[];
  createdBy: string;
  contentUrl: string;
  size?: string;
}

@Schema({timestamps: true})
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
  contentUrl: string;

  @Prop()
  size?: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);