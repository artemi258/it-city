import { Injectable } from '@nestjs/common';
import { ProductDocument, ProductModel } from './product.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICreateProductService } from './dto/createProduct.dto';
import { IChangeProductService } from './dto/changeProduct.dto';
import { ProductMenu, IProducts } from './product.interface';

@Injectable()
export class ProductService {
 constructor(
  @InjectModel(ProductModel.name) private readonly productModel: Model<ProductDocument>,
 ) {}

 async createProducts(products: unknown[]): Promise<ProductModel[]> {
  await this.productModel.deleteMany({});
  return await this.productModel.insertMany(products);
 }

 async getProductsBySubCategory({
  subCategory,
  offset,
  limit,
 }: {
  subCategory: string;
  offset: number;
  limit: number;
 }): Promise<ProductModel[]> {
  return await this.productModel
   .find({ 'subCategory.latin': subCategory })
   .skip(offset)
   .limit(limit)
   .lean()
   .exec();
 }

 async getProductsByCategory({
  category,
  offset,
  limit,
 }: {
  category: string;
  offset: number;
  limit: number;
 }): Promise<ProductModel[]> {
  return await this.productModel
   .find({ 'category.latin': category })
   .skip(offset)
   .limit(limit)
   .lean()
   .exec();
 }

 async getCategories(key: string): Promise<unknown[]> {
  return await this.productModel.distinct(key).lean().exec();
 }

 async getSubCategories(category: string): Promise<ProductMenu[]> {
  return await this.productModel
   .find({ 'category.latin': category })
   .distinct('subCategory')
   .lean()
   .exec();
 }

 //  async changeProductById(product: IChangeProductService): Promise<ProductModel> {
 //   return await this.productModel.findByIdAndUpdate(product.id, product).lean().exec();
 //  }
}
