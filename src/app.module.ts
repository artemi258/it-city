import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMongoConfig } from './configs/mongo.config';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
 imports: [
  MongooseModule.forRootAsync({
   imports: [ConfigModule],
   useFactory: getMongoConfig,
   inject: [ConfigService],
  }),
  ConfigModule.forRoot({ isGlobal: true }),
  ProductModule,
  AuthModule,
 ],
 controllers: [AppController, AuthController],
 providers: [AppService],
})
export class AppModule {}
