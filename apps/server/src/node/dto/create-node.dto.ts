import { IsOptional, IsString } from "class-validator";
import { INode } from "../schema/node.shema";

export class CreateNodeDto implements INode {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  title?: string;
  
  @IsString()
  @IsOptional()
  content?: string;
}
