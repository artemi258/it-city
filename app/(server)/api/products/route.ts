import { ruToLatin } from '@server/utils/ruToLatin';
import { NextRequest, NextResponse } from 'next/server';
import { read, utils } from 'xlsx';
import { IProducts } from './interfaces';
import { getImage } from '@server/utils/getImage';
import { createProducts, getAllProducts } from './service';
import { randomUUID } from 'crypto';
import { ICategory } from '@server/interfaces';

export async function GET(
 req: NextRequest,
): Promise<
 NextResponse<{ products: IProducts[]; last: boolean } | null> | NextResponse<{ error: string }>
> {
 try {
  const searchParams = req.nextUrl.searchParams;
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const search = searchParams.get('search');
  const jsonProducts = await getAllProducts();
  let products: IProducts[] = JSON.parse(jsonProducts);
  let last: boolean = true;
  if (offset && limit) {
   if (search) {
    const regExp = new RegExp(`${search}`, 'i');
    products = products.filter((p) => regExp.test(p.name));
   }
   last = products.length <= +limit + +offset;
   products = products.slice(+offset, +limit + +offset);
  }

  if (!products.length) {
   return NextResponse.json({ error: 'ничего не найдено по вашему запросу' }, { status: 404 });
  }

  const data = {
   products,
   last,
  };

  return NextResponse.json(data, { status: 200 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка получения товаров' }, { status: 500 });
 }
}

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
  const products = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]).slice(2) as Record<
   string,
   string
  >[];
  const jsonProductsFromBD = await getAllProducts().catch(() => null);
  const productsFromBD: IProducts[] | null = jsonProductsFromBD && JSON.parse(jsonProductsFromBD);

  let category: ICategory;
  let subCategory: ICategory;

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

   const isExistImage = productsFromBD?.find((p) => dataCurr[0] === p.name)?.image ?? null;

   return {
    id: randomUUID(),
    name: dataCurr[0],
    price: +dataCurr[2],
    image: isExistImage,
    category,
    subCategory,
    isStock: true,
   };
  });

  const filteredProducts: IProducts[] = productsWithCategory.filter((prod) => {
   return prod !== null;
  }) as IProducts[];

  const images = await getImage(filteredProducts);

  let productsWithImage = filteredProducts.map((prod) => {
   const findImage = images.find((img) => img.name === prod.name);

   return {
    ...prod,
    image: findImage ? findImage.image : null,
   };
  });

  const noProductsInStock = productsFromBD
   ?.filter((p) => !productsWithImage.find((pwi) => pwi.name === p.name))
   .map((p) => ({ ...p, isStock: false }));

  if (noProductsInStock?.length) {
   productsWithImage = [...productsWithImage, ...noProductsInStock];
  }

  await createProducts(productsWithImage);

  return NextResponse.json({ success: true }, { status: 201 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка загрузки товаров' }, { status: 500 });
 }
}
