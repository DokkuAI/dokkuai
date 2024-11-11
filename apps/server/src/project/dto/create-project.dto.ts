import { IsArray, IsBoolean, IsMongoId, IsOptional, IsString } from "class-validator";
import { IProject } from "../schema/project.schema";
import { Types } from "mongoose";

export class CreateProjectDto implements IProject {
  @IsBoolean()
  favourite: boolean;

  @IsString()
  title: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

}
