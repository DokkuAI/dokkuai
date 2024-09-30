import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { verifyToken } from '@clerk/clerk-sdk-node';
import AuthService from 'src/auth/auth.service';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from 'src/utils/helper/logger.service';
import { Reflector } from '@nestjs/core';
@Injectable()
export default class ValidateGuard implements CanActivate {
  private jwt: string;
  constructor(
    private readonly authservice: AuthService,
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
    private reflector: Reflector,
  ) {
    this.jwt = this.configService.getOrThrow<string>('jwt');
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const handler = context.getHandler();

      // Get the module or route's custom metadata to check if we should skip this guard
      const isExcluded = this.reflector.get<boolean>('isExcluded', handler);

      if (isExcluded) {
        return true; // Allow access without applying the guard
      }
      this.logger.log('Starting uploading file to s3', 'S3Service.putObject');
      const token = request.headers.authorization.split(' ')[1];
      const { sub } = await verifyToken(token, {
        jwtKey: this.jwt,
        authorizedParties: ['http://localhost:3000'],
      });
      this.logger.log('Successfully verified token');
      this.logger.log('Fetching user with externalId: ', sub);
      request.user = await this.authservice.validate(sub);
      this.logger.log('Successfully fetched user');
      return true;
    } catch (err) {
      this.logger.error('Error validating token');
      throw new BadRequestException();
    }
  }
}
