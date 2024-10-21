import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { SchemaTypes, Types } from "mongoose";

export interface INode {
    id: string;
    title?: string;
    content?: string;
}

interface ISchemaNode extends INode {
    workspaceId: Types.ObjectId
}

@Schema({ timestamps: true })
export default class Node implements ISchemaNode {
  @Prop({ required: true })
  id: string;

  @Prop({ maxlength: 80 })
  title?: string;

  @Prop({ maxlength: 300 })
  content?: string;

  @Prop({ required: true, type: SchemaTypes.ObjectId })
  workspaceId: Types.ObjectId;
}

export const NodeSchema = SchemaFactory.createForClass(Node);