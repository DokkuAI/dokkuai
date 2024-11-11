import { Types } from "mongoose";

export interface IMindmap {
  name: string;
  userId: Types.ObjectId;
  workspaceId: Types.ObjectId;
  path: string;
}
