import { NextRequest, NextResponse } from 'next/server';
import { IProducts } from '../../interfaces';
import { getAllProducts } from '../../service';
import { ICategory, IParamsCategory } from '@server/interfaces';

export async function GET(
 _req: NextRequest,
 { params }: { params: IParamsCategory },
): Promise<
 | NextResponse<ICategory[]>
 | NextResponse<{
    error: string;
   }>
> {
 try {
  const { category } = params;
  const jsonProducts = await getAllProducts();
  const products: IProducts[] = JSON.parse(jsonProducts);
  const filteredProductsByCategory = products.filter((p) => p.category.latin === category);

  const menu: ICategory[] = [];

  filteredProductsByCategory.forEach((p) => {
   const isExist = menu.find((m) => m.ru === p.subCategory.ru);

   if (!isExist) {
    menu.push(p.subCategory);
   }
  });

  menu.unshift({ ru: 'Все', latin: 'all' });

  return NextResponse.json(menu, { status: 200 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка получения меню' }, { status: 500 });
 }
}
