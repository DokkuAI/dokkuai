import { FileUnit } from "./file.enum";

export interface IFile {
    path: string;
    name: string;
    metaData: {
      fileSize: number;
      unit: FileUnit;
    };
  };
