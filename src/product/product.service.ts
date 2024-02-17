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

 async findProductsBySubCategory({
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

 async findProductsByCategory({
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

 async findAllCategories(key: string): Promise<unknown[]> {
  return await this.productModel.distinct(key).lean().exec();
 }

 async findAllSubCategories(category: string): Promise<ProductMenu[]> {
  return await this.productModel
   .find({ 'category.latin': category })
   .distinct('subCategory')
   .lean()
   .exec();
 }
 async findProductsByName({ category, text }: { category: string; text: string }) {
  return await this.productModel
   .find({ 'category.latin': category, name: new RegExp(`.*${text}.*`, 'i') })
   .limit(10)
   .lean()
   .exec();
 }
}
