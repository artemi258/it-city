import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<ProductModel>;

@Schema({ timestamps: true })
export class ProductModel {
 @Prop({ require: true, index: true })
 category: string;

 @Prop({ require: true })
 title: string;

 @Prop({ require: true })
 description: string;

 @Prop({ require: true })
 price: string;

 @Prop({ require: true })
 image: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
