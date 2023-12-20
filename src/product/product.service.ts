import { Injectable } from '@nestjs/common';
import { ProductDocument, ProductModel } from './product.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IcreateProductService } from './dto/createProduct.dto';
import { GetProductDto } from './dto/getProduct.dto';

@Injectable()
export class ProductService {
 constructor(
  @InjectModel(ProductModel.name) private readonly productModel: Model<ProductDocument>,
 ) {}

 async create(dto: IcreateProductService): Promise<ProductModel> {
  return await this.productModel.create(dto);
 }

 async getProductsByCategory(category: GetProductDto): Promise<ProductModel[]> {
  return await this.productModel.find(category).lean().exec();
 }
}
