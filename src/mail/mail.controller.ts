import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { sendMailForMessageDTO } from './dto/sendMailForMessage.dto';

@Controller('mail')
export class MailController {
 constructor(private readonly mailService: MailService) {}

 @Post()
 async sendMail(@Body() dto: sendMailForMessageDTO) {
  return await this.mailService.sendMailForMessage(dto);
 }
}
