import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { IMindmap } from "../interfaces/mindmap.interface";

@Schema({ timestamps: true })
export default class Mindmap implements IMindmap {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  workspaceId: Types.ObjectId;

  @Prop({ required: true })
  path: string;
}

export const MindmapSchema = SchemaFactory.createForClass(Mindmap);