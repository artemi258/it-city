import { IMailDTO } from '@server/api/mail/dto';
import nodemailer from 'nodemailer';

export const sendMessage = async (data: IMailDTO): Promise<{ success: boolean }> => {
 try {
  const transporter = nodemailer.createTransport({
   host: 'smtp.yandex.ru',
   port: 465,
   secure: true,
   auth: {
    user: process.env.MAIL_LOGIN,
    pass: process.env.MAIL_PASS,
   },
  });

  transporter;
  console.log(transporter);
  await transporter.sendMail({
   from: `"Сообщение от клиента" <${process.env.MAIL_LOGIN}>`,
   subject: 'Сообщение от клиента',
   to: `${process.env.MAIL_TO}`,
   html: `<strong style="color: blue">Имя</strong>: ${data.name}<br/>
                <strong style="color: blue">Телефон</strong>: ${data.phone}<br/>
                <strong style="color: blue">Емаил</strong>: ${data.email}<br/>
                <strong style="color: blue">Сообщение</strong>: ${data.message}`,
  });
  return { success: true };
 } catch (error) {
  return { success: false };
 }
};
