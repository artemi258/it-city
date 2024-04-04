import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { ServiceDocument, ServiceModel } from './service.shema';
import { Model } from 'mongoose';
import { ProductDocument } from '../product/product.shema';

@Injectable()
export class ServiceService {
 constructor(
  @InjectModel(ServiceModel.name) private readonly serviceModel: Model<ServiceDocument>,
 ) {}

 async createServices(services: unknown[]): Promise<ServiceModel[]> {
  await this.serviceModel.deleteMany({});
  return await this.serviceModel.insertMany(services);
 }
}
