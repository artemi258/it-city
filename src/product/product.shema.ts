import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductMenu } from './product.interface';

export type ProductDocument = HydratedDocument<ProductModel>;

@Schema({ timestamps: true })
export class ProductModel {
 @Prop({ require: true, index: true })
 descr: string;

 @Prop({ require: true })
 price: string;

 @Prop({ require: true, index: true })
 category: ProductMenu;

 @Prop({ require: true, index: true })
 subCategory: ProductMenu;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
