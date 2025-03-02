import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
 imports: [
  MailerModule.forRoot({
   transport: 'smtps://mail:pass@smtp.yandex.ru',
   defaults: {
    from: '"Сообщение от клиента" <it-city-mira4@yandex.ru>',
   },
  }),
 ],
 controllers: [MailController],
 providers: [MailService],
})
export class MailModule {}
