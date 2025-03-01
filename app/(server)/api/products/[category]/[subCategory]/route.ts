import { NextRequest, NextResponse } from 'next/server';
import { IParamsSubCategory, IProducts } from '../../interfaces';
import { getAllProducts } from '../../service';

export async function GET(
 req: NextRequest,
 { params }: { params: IParamsSubCategory },
): Promise<
 | NextResponse<{ products: IProducts[] | null; last: boolean }>
 | NextResponse<{
    error: string;
   }>
> {
 try {
  const searchParams = req.nextUrl.searchParams;
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const search = searchParams.get('search');

  const { category, subCategory } = params;
  const jsonProducts = await getAllProducts();
  const products: IProducts[] = JSON.parse(jsonProducts);
  let filteredProductsBySubCategory = products.filter(
   (p) =>
    p.category.latin === category && (subCategory === 'all' || p.subCategory.latin === subCategory),
  );
  let last: boolean = false;

  if (offset && limit) {
   if (search) {
    const regExp = new RegExp(`${search}`, 'i');
    filteredProductsBySubCategory = filteredProductsBySubCategory.filter((p) =>
     regExp.test(p.name),
    );
   }
   last = filteredProductsBySubCategory.length <= +limit + +offset;
   filteredProductsBySubCategory = filteredProductsBySubCategory.slice(+offset, +limit + +offset);
  }

  if (!filteredProductsBySubCategory.length) {
   return NextResponse.json({ error: 'ничего не найдено по вашему запросу' }, { status: 404 });
  }

  const data = {
   products: filteredProductsBySubCategory,
   last,
  };

  return NextResponse.json(data, { status: 200 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка получения товаров' }, { status: 500 });
 }
}
