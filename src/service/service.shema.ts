import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ServiceCategory } from './service.interface';

export type ServiceDocument = HydratedDocument<ServiceModel>;

@Schema({ timestamps: true })
export class ServiceModel {
 @Prop({ require: true, index: true })
 name: string;

 @Prop({ require: true })
 price: string;

 @Prop()
 brand: string;

 @Prop({ require: true, index: true })
 category: ServiceCategory;

 @Prop()
 subCategory: ServiceCategory;
}

export const ServiceSchema = SchemaFactory.createForClass(ServiceModel);
