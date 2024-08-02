import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMongoConfig } from './configs/mongo.config';
import { AuthModule } from './auth/auth.module';
import { ServiceModule } from './service/service.module';
import { MailModule } from './mail/mail.module';

@Module({
 imports: [
  //   MongooseModule.forRootAsync({
  //    imports: [ConfigModule],
  //    useFactory: getMongoConfig,
  //    inject: [ConfigService],
  //   }),
  ConfigModule.forRoot(),
  //   ProductModule,
  //   AuthModule,
  //   ServiceModule,
  MailModule,
 ],
 exports: [ConfigModule],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}
