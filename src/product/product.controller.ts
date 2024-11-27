import { ruToLatin } from '@/utils/ruToLatin';
import {
 Controller,
 Get,
 HttpException,
 HttpStatus,
 Param,
 Post,
 Query,
 UploadedFile,
 UploadedFiles,
 UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductModel } from './product.shema';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { read, utils } from 'xlsx';
import { ProductCategory } from './product.interface';
import { getImage } from '@/utils/getImage';

@Controller('product')
export class ProductController {
 constructor(private readonly productService: ProductService) {}

 @Post()
 @UseInterceptors(FileInterceptor('exel'))
 async create(@UploadedFile() exel: Express.Multer.File): Promise<ProductModel[]> {
  const wb = read(exel.buffer);
  const products = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]).slice(2);
  let category: ProductCategory;
  let subCategory: ProductCategory;
  const productsWithCategory = products.map((prod, i, arr) => {
   const dataCurr = Object.values(prod);
   const dataNext = arr[i + 1] && Object.values(arr[i + 1]);
   if (dataCurr.length === 1 && dataNext?.length === 1) {
    category = {
     latin: ruToLatin(dataCurr[0]),
     ru: dataCurr[0],
    };
    return null;
   } else if (dataCurr.length === 1) {
    subCategory = {
     latin: ruToLatin(dataCurr[0]),
     ru: dataCurr[0],
    };
    return null;
   }

   return { name: dataCurr[0], price: dataCurr[3], category, subCategory };
  });

  const filteredProducts = productsWithCategory.filter((prod) => prod);

  const images = await getImage(filteredProducts);

  const productsWithImage = filteredProducts.map((prod) => {
   const findImage = images.find((img) => img.name === prod.name);

   return {
    ...prod,
    image: findImage ? findImage.image : null,
   };
  });
  return await this.productService.createProducts(productsWithImage);
 }

 @Post('images')
 @UseInterceptors(FilesInterceptor('images'))
 async addImages(@UploadedFiles() images: Express.Multer.File[]) {
  return new Promise((res) => {
   for (let i = 0; i < images.length; i++) {
    console.log(images[i].originalname.split('.'));
    let origName: string | string[] = images[i].originalname.split('.');
    if (origName.length > 2) {
     origName.pop();
     origName = origName.join('.');
    } else {
     origName = origName[0];
    }
    this.productService.FindAndUpdateImageForProduct({
     name: origName,
     image: `data:${images[i].mimetype};base64,${images[i].buffer.toString('base64')}`,
    });
    if (i === images.length - 1) res({ resul: 'ok' });
   }
  });
 }

 @Get('category')
 async getCategories(): Promise<unknown[]> {
  return await this.productService.findAllCategories('category');
 }

 @Get('subCategory/:category')
 async getSubCategory(@Param() { category }: { category: string }): Promise<ProductCategory[]> {
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
 async searchProduct(
  @Param() { category }: { category: string },
  @Query() { text, offset }: { text: string; offset: number },
 ): Promise<ProductModel[]> {
  const products = await this.productService.findProductsByName({ category, text, offset });
  if (!products.length && !+offset) {
   throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
  return products;
 }
}
