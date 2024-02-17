import { Prop } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export interface IProducts {
 _id: ObjectId;
 descr: string;
 price: string;
 category: ProductMenu[];
 subCategory: ProductMenu[];
}

export class ProductMenu {
 @Prop()
 latin?: string;
 @Prop()
 ru: string;
}
