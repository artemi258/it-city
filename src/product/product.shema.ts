import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<ProductModel>;

@Schema()
export class ProductModel {
 @Prop({ require: true })
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
