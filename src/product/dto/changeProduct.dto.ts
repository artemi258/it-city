import { ObjectId } from 'mongoose';

export class ChangeProductDto {
 id: ObjectId;
 title?: string;
 description?: number;
 price?: number;
 image?: File;
}

export interface IchangeProductService {
 id: ObjectId;
 title?: string;
 description?: number;
 price?: number;
 image?: string | File;
}
