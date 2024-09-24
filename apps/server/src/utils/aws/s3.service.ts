/* eslint @typescript-eslint/naming-convention: 0 */
import {
  CopyObjectCommand,
  CopyObjectCommandInput,
  CopyObjectCommandOutput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
  GetObjectAclCommandInput,
  GetObjectCommand,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable } from '@nestjs/common';
import PutObjectDto from '../dto/put-object.dto';
import { LoggerService } from '../helper/logger.service';

@Injectable()
export class S3Service {
  private s3Client: S3Client;
  private assetsBucketName: string;
  private awsRegion: string;
  constructor(private readonly logger: LoggerService) {
    this.assetsBucketName = process.env.AWS_S3_BUCKET_NAME ;

    this.awsRegion = process.env.AWS_REGION;

    this.s3Client = new S3Client({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY ,
        secretAccessKey:
          process.env.AWS_SECRET_KEY ,
      },
      region: this.awsRegion,
    });
  }

  async putObject({
    file,
    fileName,
    filePath,
    fileContentType,
  }: {
    file: Buffer;
    fileName: string;
    filePath: string;
    fileContentType: string;
  }): Promise<PutObjectDto> {
    try {
      this.logger.log('Starting uploading file to s3', 'S3Service.putObject', {
        fileName,
        path: filePath,
      });

      const pathToUpload = filePath;
      const input: PutObjectCommandInput = {
        Body: file, 
        Bucket: this.assetsBucketName,
        Key: `${pathToUpload}/${fileName}`,
        ContentType: fileContentType,
      };

      const command = new PutObjectCommand(input);
      const response: PutObjectCommandOutput =
        await this.s3Client.send(command);

      // Construct the URL based on the bucket and key
      const path = `${pathToUpload}/${fileName}`;

      this.logger.log(
        'Successfully uploaded file to s3',
        'S3Service.putObject',
        { path, ...response },
      );
      return { path };
    } catch (error) {
      this.logger.error(
        'Failed uploading file to s3',
        'S3Service.putObject',
        { fileName, path: filePath },
        error,
      );
      throw error;
    }
  }

  async getObject(filePath: string) {
    try {
      const input = {
        Bucket: this.assetsBucketName,
        Key: filePath,
      };

      const command = new GetObjectCommand(input);
      const response = await this.s3Client.send(command);

      this.logger.log('Successfully fetched file', 'S3Service.getObject', {
        response,
      });
      return response;
    } catch (error) {
      this.logger.error(
        'Error fetching file from s3',
        'S3Service.getObject',
        { filePath },
        error,
      );
      throw error;
    }
  }

  async generatePreSignedUrl({
    fileName,
    path,
  }: {
    fileName: string;
    path: string;
  }): Promise<string> {
    try {
      const pathToUpload = path;

      const input: GetObjectAclCommandInput = {
        Bucket: this.assetsBucketName,
        Key: `${pathToUpload}/${fileName}`,
      };

      const command = new GetObjectCommand(input);
      const response = await getSignedUrl(this.s3Client, command, {
        expiresIn: 3600,
      });
      return response;
    } catch (error) {
      this.logger.error(
        'Error generating pre-signed url',
        'S3Service.generatePreSignedUrl',
        { fileName, path },
        error,
      );
      throw error;
    }
  }

  async moveObject({
    sourceBucket,
    destinationBucket,
    key,
  }: {
    sourceBucket: string;
    destinationBucket: string;
    key: string;
  }) {
    try {
      const copyResponse = await this.copyObject({
        sourceBucket,
        destinationBucket,
        key,
      });

      const deleteResponse = await this.deleteObject({
        destinationBucket,
        key,
      });

      return {
        copyResponse,
        deleteResponse,
      };
    } catch (error) {
      this.logger.error(
        'Error moving object',
        'S3Service.moveObject',
        { sourceBucket, destinationBucket, key },
        error,
      );
      throw error;
    }
  }

  async copyObject({
    sourceBucket,
    destinationBucket,
    key,
  }: {
    sourceBucket: string;
    destinationBucket: string;
    key: string;
  }): Promise<CopyObjectCommandOutput> {
    try {
      const input: CopyObjectCommandInput = {
        Bucket: destinationBucket,
        CopySource: sourceBucket,
        Key: key,
      };
      const command = new CopyObjectCommand(input);
      const response: CopyObjectCommandOutput =
        await this.s3Client.send(command);

      this.logger.log('Successfully copied file', 'S3Service.moveObject', {
        sourceBucket,
        destinationBucket,
        key,
        response,
      });
      return response;
    } catch (error) {
      this.logger.error(
        'Error copying object',
        'S3Service.copyObject',
        { sourceBucket, destinationBucket, key },
        error,
      );
      throw error;
    }
  }

  async deleteObject({
    destinationBucket,
    key,
  }: {
    destinationBucket: string;
    key: string;
  }): Promise<DeleteObjectCommandOutput> {
    try {
      const input: DeleteObjectCommandInput = {
        Bucket: destinationBucket,
        Key: key,
      };

      const command = new DeleteObjectCommand(input);
      const response: DeleteObjectCommandOutput =
        await this.s3Client.send(command);

      this.logger.log('Successfully deleted file', 'S3Service.moveObject', {
        destinationBucket,
        key,
        response: response,
      });
      return response;
    } catch (error) {
      this.logger.error(
        'Error deleting object',
        'S3Service.deleteObject',
        { destinationBucket, key },
        error,
      );
      throw error;
    }
  }
}
