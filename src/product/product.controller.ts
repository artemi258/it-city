import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';
import { ProductModel } from './product.shema';
import { GetProductDto } from './dto/getProduct.dto';

@Controller('product')
export class ProductController {
 constructor(private readonly productService: ProductService) {}

 @Post()
 async create(@Body() dto: CreateProductDto): Promise<ProductModel> {
  return this.productService.create(dto);
 }

 @Get()
 async get(@Body() dto: GetProductDto): Promise<ProductModel[]> {
  return this.productService.getProductsByCategory(dto);
 }
}
