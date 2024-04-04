import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
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
  let brand;
  let subCategory;
  for (let i = 0; i < categories.length; i++) {
   const currentService: { [key: string]: unknown }[] = utils.sheet_to_json(
    wb.Sheets[wb.SheetNames[i]],
   );
   for (let j = 0; j < currentService.length; j++) {
    if (!('цена' in currentService[j]) && !('цена' in currentService[j + 1])) {
     subCategory = currentService[j]['Наименование'];
     continue;
    }
    if (!('цена' in currentService[j]) && 'цена' in currentService[j + 1]) {
     brand = currentService[j]['Наименование'];
     continue;
    }
    const service =
     brand && subCategory
      ? {
         name: currentService[j]['Наименование'],
         price: currentService[j]['цена'],
         category: {
          latin: ruToLatin(categories[i]),
          ru: categories[i],
         },
         subCategory,
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
}
