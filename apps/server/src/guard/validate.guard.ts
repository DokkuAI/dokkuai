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
  private devDomain: string;
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
    private reflector: Reflector,
  ) {
    this.jwt = this.configService.getOrThrow<string>('jwt');
    this.devDomain = this.configService.getOrThrow<string>('devDomain');
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const handler = context.getHandler();

      // Get the module or route's custom metadata to check if we should skip this guard
      const isPublic = this.reflector.get<boolean>('isPublic', handler);

      if (isPublic) {
        return true; // Allow access without applying the guard
      }
      const token = request.headers.authorization.split(' ')[1];
      const { sub } = await verifyToken(token, {
        jwtKey: this.jwt,
        authorizedParties: [this.devDomain],
      });
      this.logger.log(
        'Successfully verified token',
        'ValidateGuard.canActivate',
      );
      request.user = await this.authService.validate(sub);
      return true;
    } catch (error) {
      this.logger.error(
        'Error validating token',
        'ValidateGuard.canActivate',
        error,
      );
      throw new BadRequestException();
    }
  }
}
