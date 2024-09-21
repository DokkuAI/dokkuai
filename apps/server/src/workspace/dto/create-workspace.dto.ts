import { IsArray, IsEnum, IsString } from "class-validator";
import { IWorkspace, WorkspaceType } from "../schema/workspace.schema";

export class CreateWorkspaceDto implements IWorkspace {

    @IsString()
    name: string;

    @IsEnum(WorkspaceType)
    type: WorkspaceType;

    @IsArray()
    @IsString({each: true})
    invites: string[];
}
