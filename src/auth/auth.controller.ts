import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
 constructor(private readonly configService: ConfigService) {}

 @Post()
 Auth(@Body() dto: AuthDto): { auth: boolean } {
  if (
   dto.login === this.configService.get('AUTH_LOGIN') &&
   dto.pass === this.configService.get('AUTH_PASS')
  ) {
   return { auth: true };
  }
  return { auth: false };
 }
}
