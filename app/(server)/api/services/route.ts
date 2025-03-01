import { ruToLatin } from '@server/utils/ruToLatin';
import { NextRequest, NextResponse } from 'next/server';
import { read, utils } from 'xlsx';
import { createServices } from './service';
import { randomUUID } from 'crypto';

export async function POST(req: NextRequest): Promise<
 NextResponse<
  | {
     success: boolean;
    }
  | { error: string }
 >
> {
 try {
  const data = await req.formData();
  const file = data.get('exel') as unknown as File;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const wb = read(buffer);
  const categories = wb.SheetNames;
  const services: any[][] = [];
  let brand: string | null = null;
  let firstLevelCategory: string | null = null;
  let secondLevelCategory: string | null = null;

  for (let i = 0; i < categories.length; i++) {
   firstLevelCategory = null;
   secondLevelCategory = null;
   brand = null;
   const currentService: { цена: string; Наименование: string }[] = utils.sheet_to_json(
    wb.Sheets[wb.SheetNames[i]],
   );

   services.push([]);
   //  console.log('object', services);

   for (let j = 0; j < currentService.length; j++) {
    if (
     !('цена' in currentService[j]) &&
     currentService[j + 3] &&
     !('цена' in currentService[j + 1]) &&
     !('цена' in currentService[j + 2])
    ) {
     firstLevelCategory = currentService[j]['Наименование'];
     continue;
    }
    if (!('цена' in currentService[j]) && !('цена' in currentService[j + 1])) {
     secondLevelCategory = currentService[j]['Наименование'];
     continue;
    }
    if (!('цена' in currentService[j]) && 'цена' in currentService[j + 1]) {
     brand = currentService[j]['Наименование'];
     continue;
    }
    if (
     services[services.length - 1][services[services.length - 1].length - 1]?.firstLevelCategory !==
      firstLevelCategory ||
     services[services.length - 1][services[services.length - 1].length - 1]
      ?.secondLevelCategory !== secondLevelCategory
    ) {
     services[services.length - 1].push({
      id: randomUUID(),
      category: {
       latin: ruToLatin(categories[i]),
       ru: categories[i],
      },
      [!secondLevelCategory ? 'data' : 'brands']: !secondLevelCategory ? [] : {},
      firstLevelCategory,
      secondLevelCategory,
     });
    }
    console.log(brand);
    console.log(services);
    if (brand) {
     if (!services[services.length - 1][services[services.length - 1].length - 1].brands[brand])
      services[services.length - 1][services[services.length - 1].length - 1].brands[brand] = [];
     services[services.length - 1][services[services.length - 1].length - 1].brands[brand].push({
      id: randomUUID(),
      name: currentService[j]['Наименование'],
      price: currentService[j]['цена'],
     });
    } else {
     services[services.length - 1][services[services.length - 1].length - 1].data.push({
      id: randomUUID(),
      name: currentService[j]['Наименование'],
      price: currentService[j]['цена'],
     });
    }
   }
  }
  console.log(services);
  await createServices(services);
  return NextResponse.json({ success: true }, { status: 201 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка загрузки товаров' }, { status: 500 });
 }
}
