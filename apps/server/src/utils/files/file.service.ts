import { Injectable } from '@nestjs/common';
import PutObjectDto from '../dto/put-object.dto';
import { S3Service } from '../aws/s3.service';

@Injectable()
export default class FileService {
  constructor(private readonly s3Service: S3Service) {}

  async upload(file: Express.Multer.File, path: string): Promise<PutObjectDto> {
    try {
      const { buffer, originalname } = file;
      return await this.s3Service.putObject({
        file: buffer,
        fileName: originalname,
        filePath: path, //NOTE: Do not add trailing `/` at the end of the path
        fileContentType: file.mimetype,
      });
    } catch (error) {
      console.error('Uploading file - FAILED');
      throw error;
    }
  }

  async uploadJSON(
    noteData: { name: string; type: string; content: Buffer },
    path: string,
  ): Promise<PutObjectDto> {
    try {
      const { name, type, content } = noteData;
      console.log({path});
      return await this.s3Service.putObject({
        file: content,
        fileName: name,
        filePath: path, //NOTE: Do not add trailing `/` at the end of the path
        fileContentType: type,
      });
    } catch (error) {
      console.error('Uploading JSON - FAILED');
      throw error;
    }
  }

  async delete(key: string, destinationBucket: string) {
    try {
      return await this.s3Service.deleteObject({ key, destinationBucket });
    } catch (error) {
      console.error('Deleting file - FAILED');
      throw error;
    }
  }
}
