import {
 Body,
 Controller,
 Get,
 Param,
 Patch,
 Post,
 UploadedFile,
 UseInterceptors,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';
import { ProductModel } from './product.shema';
import { GetProductsDto } from './dto/getProducts.dto';
import { ChangeProductDto } from './dto/changeProduct.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { read, utils } from 'xlsx';

@Controller('product')
export class ProductController {
 constructor(private readonly productService: ProductService) {}

 @Post()
 @UseInterceptors(FileInterceptor('image'))
 async create(
  @Body() dto: CreateProductDto,
  @UploadedFile() image: Express.Multer.File,
 ): Promise<any> {
  const wb = read(image.buffer);
  console.log(utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
  const arr = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
  return await this.productService.createProduct(arr);
  //   return await this.productService.createProduct({
  //    ...dto,
  //    image: `data:${image.mimetype};base64,${image.buffer.toString('base64')}`,
  //   });
 }

 @Get(':category')
 async getAllProducts(@Param('category') category: string): Promise<any> {
  return await this.productService.getProductsByCategory({ category });
 }

 @Patch()
 @UseInterceptors(FileInterceptor('image'))
 async changeProduct(
  @Body() dto: ChangeProductDto,
  @UploadedFile() image: Express.Multer.File,
 ): Promise<ProductModel> {
  if (dto.image)
   return await this.productService.changeProductById({
    ...dto,
    image: `data:${image.mimetype};base64,${image.buffer.toString('base64')}`,
   });
  return await this.productService.changeProductById(dto);
 }
}
