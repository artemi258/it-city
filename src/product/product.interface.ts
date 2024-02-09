import { ObjectId } from 'mongoose';

export interface IProducts {
 _id: ObjectId;
 descr: string;
 price: string;
 category: ProductMenu[];
 subCategory: ProductMenu[];
}

export class ProductMenu {
 latin?: string;
 ru: string;
}
