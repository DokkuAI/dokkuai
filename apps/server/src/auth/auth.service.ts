import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import User from 'src/user/schema/user.schema';
import UserService from 'src/user/user.service';
import { Webhook } from 'svix';

@Injectable()
export default class AuthService {

  private webhookSecret: string;
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    this.webhookSecret =
      this.configService.getOrThrow<string>('webhookSecret');
  }

  async webhook(payload: any, headers: any) {

    // Get the Svix headers for verification
    const svix_id = headers['svix-id'];
    const svix_timestamp = headers['svix-timestamp'];
    const svix_signature = headers['svix-signature'];

    // If there are no Svix headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      throw new BadRequestException('headers didint match');
    }

    // Create a new Svix instance with your secret.
    const wh = new Webhook(this.webhookSecret);

    let evt;

    // Attempt to verify the incoming webhook
    // If successful, the payload will be available from 'evt'
    // If the verification fails, error out and  return error code
    try {
      evt = wh.verify(JSON.stringify(payload), {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      });
    } catch (err) {
      console.log('Error verifying webhook:', err);
      throw new BadRequestException({
        success: false,
        message: err,
      });
    }
    const { data } = payload;
    const userPayload: CreateUserDto = {
      externalId: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email_addresses[0].email_address,
    };
    await this.userService.create(userPayload);

    return {
      success: true,
      message: 'Webhook received',
    };
  }

  async validate(decodedJwt: any): Promise<User> {
    const { sub } = decodedJwt;
    const user = await this.userService.findOne({ exteralId: sub });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
