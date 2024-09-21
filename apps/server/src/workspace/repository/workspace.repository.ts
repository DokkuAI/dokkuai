import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import Workspace from "../schema/workspace.schema";
import { Model } from "mongoose";
import { UpdateWorkspaceDto } from "../dto/update-workspace.dto";


@Injectable()
export default class WorkspaceRepository {
  constructor(
    @InjectModel(Workspace.name)
    private readonly model: Model<Workspace>,
  ) {}

  async create(workspace: Workspace): Promise<Workspace> {
    const doc = await this.model.create(workspace);
    return doc;
  }

  async findById(id: string): Promise<Workspace> {
    const doc = await this.model.findById(id);
    return doc;
  }

  async findByIdAndUpdate(id: string, workspace: UpdateWorkspaceDto): Promise<Workspace> {
    const doc = this.model.findByIdAndUpdate(id, workspace, {new: true});
    return doc;
  }

  async findByIdAndDelete(id: string): Promise<null> {
    await this.model.findByIdAndDelete(id);
    return;
  }
}