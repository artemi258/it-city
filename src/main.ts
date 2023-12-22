import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap(): Promise<void> {
 const app = await NestFactory.create(AppModule, { cors: true });
 app.setGlobalPrefix('api');
 await app.listen(3001);
}
bootstrap();
