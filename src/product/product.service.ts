import { Injectable } from '@nestjs/common';
import { ProductDocument, ProductModel } from './product.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IcreateProductService } from './dto/createProduct.dto';
import { GetProductsDto } from './dto/getProducts.dto';
import { IchangeProductService } from './dto/changeProduct.dto';

@Injectable()
export class ProductService {
 constructor(
  @InjectModel(ProductModel.name) private readonly productModel: Model<ProductDocument>,
 ) {}

 async createProduct(dto: IcreateProductService): Promise<ProductModel> {
  return await this.productModel.create(dto);
 }

 async getProductsByCategory(category: GetProductsDto): Promise<ProductModel[]> {
  return await this.productModel.find(category).lean().exec();
 }

 async changeProductById(product: IchangeProductService): Promise<ProductModel> {
  return await this.productModel.findByIdAndUpdate().lean().exec();
 }
}
