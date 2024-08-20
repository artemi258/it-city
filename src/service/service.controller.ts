import { Controller, Post, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { ServiceService } from './service.service';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { read, utils } from 'xlsx';
import { ruToLatin } from '@/utils/ruToLatin';

@Controller('service')
export class ServiceController {
 constructor(private readonly serviceService: ServiceService) {}

 @Post()
 @UseInterceptors(FileInterceptor('exel'))
 create(@UploadedFile() exel: Express.Multer.File) {
  const wb = read(exel.buffer);
  const categories = wb.SheetNames;
  const services = [];
  let brand: string;
  let secondLevelCategory: string;
  let thirdLevelCategory: string;
  for (let i = 0; i < categories.length; i++) {
   secondLevelCategory = null;
   const currentService: { цена: string | number; Наименование: string }[] = utils.sheet_to_json(
    wb.Sheets[wb.SheetNames[i]],
   );
   for (let j = 0; j < currentService.length; j++) {
    if (
     !('цена' in currentService[j]) &&
     currentService[j + 2] &&
     !('цена' in currentService[j + 1]) &&
     !('цена' in currentService[j + 2])
    ) {
     secondLevelCategory = currentService[j]['Наименование'];
     continue;
    }
    if (!('цена' in currentService[j]) && !('цена' in currentService[j + 1])) {
     thirdLevelCategory = currentService[j]['Наименование'];
     continue;
    }
    if (!('цена' in currentService[j]) && 'цена' in currentService[j + 1]) {
     brand = currentService[j]['Наименование'];
     continue;
    }
    const service =
     brand && thirdLevelCategory
      ? {
         name: currentService[j]['Наименование'],
         price: currentService[j]['цена'],
         category: {
          latin: ruToLatin(categories[i]),
          ru: categories[i],
         },
         secondLevelCategory,
         thirdLevelCategory,
         brand,
        }
      : {
         name: currentService[j]['Наименование'],
         price: currentService[j]['цена'],
         category: {
          latin: ruToLatin(categories[i]),
          ru: categories[i],
         },
        };
    services.push(service);
   }
  }

  return this.serviceService.createServices(services);
 }

 @Get('categories')
 async getCategories(): Promise<unknown> {
  const data = await this.serviceService.findAllCategories('category');
  console.log(data);
  return { data };
 }

 @Get(':category')
 async getServices(@Param() { category }: { category: string }): Promise<unknown[]> {
  return await this.serviceService.findServicesByCategory(category);
 }
}
