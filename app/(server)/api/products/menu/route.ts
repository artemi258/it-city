import { NextResponse } from 'next/server';
import { IProducts } from '../interfaces';
import { getAllProducts } from '../service';
import { ICategory } from '@server/interfaces';

export async function GET(): Promise<
 | NextResponse<ICategory[]>
 | NextResponse<{
    error: string;
   }>
> {
 try {
  const jsonProducts = await getAllProducts();
  const products: IProducts[] = JSON.parse(jsonProducts);

  const menu: ICategory[] = [];

  products.forEach((p) => {
   const isExist = menu.find((m) => m.ru === p.category.ru);

   if (!isExist) {
    menu.push(p.category);
   }
  });
  console.log(menu);
  return NextResponse.json(menu, { status: 200 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка получения меню' }, { status: 500 });
 }
}
