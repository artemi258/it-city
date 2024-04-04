import { Prop } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export interface IProducts {
 _id: ObjectId;
 descr: string;
 price: string;
 category: ProductCategory[];
 subCategory: ProductCategory[];
}

export class ProductCategory {
 @Prop()
 latin?: string;
 @Prop()
 ru: string;
}
