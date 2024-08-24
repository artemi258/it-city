import { MailerService } from '@nestjs-modules/mailer/dist/mailer.service';
import { Injectable } from '@nestjs/common';
import { sendMailForMessageDTO } from './dto/sendMailForMessage.dto';

@Injectable()
export class MailService {
 constructor(private readonly mailService: MailerService) {}

 sendMailForMessage(dto: sendMailForMessageDTO) {
  return this.mailService.sendMail({
   to: 'itcity.su@gmail.com',
   html: `<strong style="color: blue">Имя</strong>: ${dto.name}<br/>
		  <strong style="color: blue">Телефон</strong>: ${dto.phone}<br/>
          <strong style="color: blue">Емаил</strong>: ${dto.email}<br/>
          <strong style="color: blue">Сообщение</strong>: ${dto.message}`,
  });
 }
}
