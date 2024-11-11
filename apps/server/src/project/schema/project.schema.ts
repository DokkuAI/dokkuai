import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

export interface IProject {
  favourite: boolean;
  title: string;
  tags?: string[];

}
@Schema({ timestamps: true })
export default class Project implements IProject {
  @Prop({ required: true })
  favourite: boolean;

  @Prop({ required: true })
  title: string;

  @Prop()
  tags?: string[];

  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: true })
  userId: Types.ObjectId;

}

export const ProjectSchema = SchemaFactory.createForClass(Project);