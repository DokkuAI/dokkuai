import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IFile } from './file.interface';
import { FileUnit } from './file.enum';

class Metadata {
  @Prop({ required: true })
  fileSize: number;

  @Prop({ required: true, enum: FileUnit})
  unit: FileUnit;
}

const MetadataSchema = SchemaFactory.createForClass(Metadata);

@Schema({ timestamps: true })
export class File implements IFile {
  @Prop({ required: true })
  path: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: MetadataSchema })
  metaData: Metadata;
}

export const FileSchema = SchemaFactory.createForClass<IFile>(File);