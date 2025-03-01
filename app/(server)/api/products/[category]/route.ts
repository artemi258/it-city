import { NextRequest, NextResponse } from 'next/server';
import { IProducts } from '../interfaces';
import { getAllProducts } from '../service';
import { IParamsCategory } from '@server/interfaces';

export async function GET(
 req: NextRequest,
 { params }: { params: IParamsCategory },
): Promise<
 | NextResponse<{ products: IProducts[]; last: boolean } | null>
 | NextResponse<{
    error: string;
   }>
> {
 try {
  const searchParams = req.nextUrl.searchParams;
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const search = searchParams.get('search');

  const { category } = params;
  const jsonProducts = await getAllProducts();
  const products: IProducts[] = JSON.parse(jsonProducts);
  let filteredProductsByCategory = products.filter((p) => p.category.latin === category);
  let last: boolean = false;

  if (offset && limit) {
   if (search) {
    const regExp = new RegExp(`${search}`, 'i');
    filteredProductsByCategory = filteredProductsByCategory.filter((p) => regExp.test(p.name));
   }
   last = filteredProductsByCategory.length <= +limit + +offset;
   filteredProductsByCategory = filteredProductsByCategory.slice(+offset, +limit + +offset);
  }
  if (!filteredProductsByCategory.length) {
   return NextResponse.json({ error: 'ничего не найдено по вашему запросу' }, { status: 200 });
  }

  const data = {
   products: filteredProductsByCategory,
   last,
  };

  return NextResponse.json(data, { status: 200 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка получения товаров' }, { status: 500 });
 }
}
