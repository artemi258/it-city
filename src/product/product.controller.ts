import { ruToLatin } from '@/utils/ruToLatin';
import {
 Body,
 Controller,
 Get,
 Param,
 Patch,
 Post,
 Query,
 UploadedFile,
 UseInterceptors,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';
import { ProductModel } from './product.shema';
import { ChangeProductDto } from './dto/changeProduct.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { read, utils } from 'xlsx';
import { ProductMenu, IProducts } from './product.interface';

@Controller('product')
export class ProductController {
 constructor(private readonly productService: ProductService) {}

 @Post()
 @UseInterceptors(FileInterceptor('exel'))
 async create(@UploadedFile() exel: Express.Multer.File): Promise<ProductModel[]> {
  const wb = read(exel.buffer);
  const products = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
  let category: ProductMenu;
  let subCategory: ProductMenu;
  const productsWithCategory = products.slice(2).map((prod, i, arr) => {
   if (Object.values(prod).length === 1 && Object.values(arr[i + 1]).length === 1) {
    category = {
     latin: ruToLatin(prod['__EMPTY_1']),
     ru: prod['__EMPTY_1'],
    };
    return null;
   } else if (Object.values(prod).length === 1) {
    subCategory = {
     latin: ruToLatin(prod['__EMPTY_1']),
     ru: prod['__EMPTY_1'],
    };
    return null;
   }
   return { name: prod['__EMPTY_1'], price: prod['__EMPTY_3'], category, subCategory };
  });
  const filteredProducts = productsWithCategory.filter((prod) => prod);
  return await this.productService.createProducts(filteredProducts);
  // return await this.productService.createProduct({
  //  ...dto,
  //  image: `data:${image.mimetype};base64,${image.buffer.toString('base64')}`,
  // });
 }

 @Get('category')
 async getCategories(): Promise<unknown[]> {
  return await this.productService.findAllCategories('category');
 }

 @Get('subCategory/:category')
 async getSubCategory(@Param() { category }: { category: string }): Promise<ProductMenu[]> {
  const subCategories = await this.productService.findAllSubCategories(category);
  return [{ ru: 'Все' }, ...subCategories];
 }

 @Get('bySubCategory/:subCategory')
 async getProductsBySubCategory(
  @Param() { subCategory }: { subCategory: string },
  @Query() { offset, limit }: { offset: number; limit: number },
 ): Promise<ProductModel[]> {
  return await this.productService.findProductsBySubCategory({ subCategory, offset, limit });
 }

 @Get('byCategory/:category')
 async getProductsByCategory(
  @Param() { category }: { category: string },
  @Query() { offset, limit }: { offset: number; limit: number },
 ): Promise<ProductModel[]> {
  return await this.productService.findProductsByCategory({ category, offset, limit });
 }

 @Get('search/:category')
 searchProduct(@Param() { category }: { category: string }, @Query() { text }: { text: string }) {
  return this.productService.findProductsByName({ category, text });
 }
}
