import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import Node from "../schema/node.shema";
import { Model, Types } from "mongoose";

@Injectable()
export default class NodeRepository {
  constructor(
    @InjectModel(Node.name)
    private readonly model: Model<Node>,
  ) {}

  async create(node: Node): Promise<Node> {
    const doc = await this.model.create(node);
    return doc;
  }

  async find(query: {workspaceId: Types.ObjectId}): Promise<Node[]> {
    const docs = await this.model.find(query);
    return docs;
  }

  async findByIdAndDelete(id: Types.ObjectId): Promise<null> {
    await this.model.findByIdAndDelete(id);
    return;
  }
}