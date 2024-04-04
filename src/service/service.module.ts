import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ServiceModel, ServiceSchema } from './service.shema';

@Module({
 controllers: [ServiceController],
 imports: [MongooseModule.forFeature([{ name: ServiceModel.name, schema: ServiceSchema }])],
 providers: [ServiceService],
})
export class ServiceModule {}
