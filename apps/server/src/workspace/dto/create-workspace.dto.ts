import { IsArray, IsEnum, IsOptional, IsString } from "class-validator";
import { IWorkspace, WorkspaceType } from "../schema/workspace.schema";

export class CreateWorkspaceDto implements IWorkspace {

    @IsOptional()
    @IsString()
    name?: string;

    @IsEnum(WorkspaceType)
    type: WorkspaceType;

    @IsArray()
    @IsString({each: true})
    @IsOptional()
    invites?: string[];
}
