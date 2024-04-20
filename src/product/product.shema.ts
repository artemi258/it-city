import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductCategory } from './product.interface';

export type ProductDocument = HydratedDocument<ProductModel>;

@Schema({ timestamps: true })
export class ProductModel {
 @Prop({ require: true, index: true })
 name: string;

 @Prop({ require: true })
 price: string;

 @Prop({ require: true, index: true })
 category: ProductCategory;

 @Prop({ require: true })
 subCategory: ProductCategory;

 @Prop()
 image?: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
