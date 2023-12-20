import { Body, Controller, Get, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';
import { ProductModel } from './product.shema';
import { GetProductDto } from './dto/getProduct.dto';
import { ChangeProductDto } from './dto/changeProduct.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
 constructor(private readonly productService: ProductService) {}

 @Post()
 @UseInterceptors(FileInterceptor('image'))
 async create(
  @Body() dto: CreateProductDto,
  @UploadedFile() image: Express.Multer.File,
 ): Promise<ProductModel> {
  return await this.productService.create({ ...dto, image: image.buffer.toString('base64') });
 }

 @Get()
 async get(@Body() dto: GetProductDto): Promise<ProductModel[]> {
  return await this.productService.getProductsByCategory(dto);
 }

 @Patch()
 async changeProduct(@Body() dto: ChangeProductDto) {}
}
