import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<ProductModel>;

@Schema({ timestamps: true })
export class ProductModel {
 @Prop({ require: true })
 __EMPTY_1: string;

 @Prop({ require: true })
 'Розничная цена': string;

 @Prop({ require: true, index: true })
 'категория': string;
}
// @Schema({ timestamps: true })
// export class ProductModel {
//  @Prop({ require: true, index: true })
//  category: string;

//  @Prop({ require: true })
//  title: string;

//  @Prop({ require: true })
//  description: string;

//  @Prop({ require: true })
//  price: string;

//  @Prop({ require: true, type: Object })
//  image: Object;
// }

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
