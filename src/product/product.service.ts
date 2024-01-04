import { Injectable } from '@nestjs/common';
import { ProductDocument, ProductModel } from './product.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICreateProductService } from './dto/createProduct.dto';
import { GetProductsDto } from './dto/getProducts.dto';
import { IChangeProductService } from './dto/changeProduct.dto';

@Injectable()
export class ProductService {
 constructor(
  @InjectModel(ProductModel.name) private readonly productModel: Model<ProductDocument>,
 ) {}

 async createProduct(dto: ICreateProductService): Promise<ProductModel> {
  return await this.productModel.create(dto);
 }

 async getProductsByCategory(category: GetProductsDto): Promise<ProductModel[]> {
  return await this.productModel.find(category).lean().exec();
 }

 async changeProductById(product: IChangeProductService): Promise<ProductModel> {
  return await this.productModel.findByIdAndUpdate(product.id, product).lean().exec();
 }
}
