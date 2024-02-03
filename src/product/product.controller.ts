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
  const products: object[] = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
  let category: string;
  let subCategory: string;
  const productsWithCategory = products.slice(2).map((prod, i, arr) => {
   if (Object.values(prod).length === 1 && Object.values(arr[i + 1]).length === 1) {
    category = prod['__EMPTY_1'];
   } else if (Object.values(prod).length === 1) {
    subCategory = prod['__EMPTY_1'];
   }
   return { ...prod, category, subCategory };
  });
  console.log(productsWithCategory);
  //   console.log(products.slice(2));
  //   return await this.productService.createProduct(productsWithCategory);
  //   return await this.productService.createProduct({
  //    ...dto,
  //    image: `data:${image.mimetype};base64,${image.buffer.toString('base64')}`,
  //   });
 }

 @Get(':category')
 async getAllProducts(@Param('category') category: string): Promise<any> {
  return await this.productService.getProductsByCategory({ категория: category });
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
