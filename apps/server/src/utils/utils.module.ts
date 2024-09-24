import { Module } from '@nestjs/common';
import { S3Service } from './aws/s3.service';
import { LoggerService } from './helper/logger.service';
import UtilsController from './utils.controller';
import FileService from './files/file.service';

@Module({
  controllers: [UtilsController],
  providers: [S3Service, LoggerService, FileService],
  exports: [LoggerService, FileService],
})
export default class UtilsModule {}
