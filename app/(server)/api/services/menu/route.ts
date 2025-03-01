import { NextResponse } from 'next/server';
import { IServices } from '../interfaces';
import { getAllService } from '../service';
import { ICategory } from '@server/interfaces';

export async function GET(): Promise<
 | NextResponse<ICategory[]>
 | NextResponse<{
    error: string;
   }>
> {
 try {
  const jsonService = await getAllService();
  const services: IServices[][] = JSON.parse(jsonService);

  const menu: ICategory[] = [];

  services.forEach((s) => {
   menu.push(s[0].category);
  });

  return NextResponse.json(menu, { status: 200 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка получения меню' }, { status: 500 });
 }
}
