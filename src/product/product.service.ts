import { Injectable } from '@nestjs/common';
import { ProductDocument, ProductModel } from './product.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICreateProductService } from './dto/createProduct.dto';
import { IChangeProductService } from './dto/changeProduct.dto';

@Injectable()
export class ProductService {
 constructor(
  @InjectModel(ProductModel.name) private readonly productModel: Model<ProductDocument>,
 ) {}

 async createProducts(product: any): Promise<any> {
  await this.productModel.deleteMany({});
  return await this.productModel.insertMany(product);
 }

 async getProductsBySubCategory(subCategory: string): Promise<ProductModel[]> {
  return await this.productModel.find({ 'subCategory.latin': subCategory }).lean().exec();
 }

 async getProductsByCategory(category: string): Promise<ProductModel[]> {
  return await this.productModel.find({ 'category.latin': category }).lean().exec();
 }

 async getCategories(key: string): Promise<
  {
   latin: string;
   ru: string;
  }[]
 > {
  return await this.productModel.distinct(key);
 }

 async getSubCategories(category: string): Promise<any> {
  return await this.productModel.find({ 'category.latin': category }).distinct('subCategory');
 }

 async changeProductById(product: IChangeProductService): Promise<ProductModel> {
  return await this.productModel.findByIdAndUpdate(product.id, product).lean().exec();
 }
}
