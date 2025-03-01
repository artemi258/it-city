import { NextRequest, NextResponse } from 'next/server';
import { IServices } from '../interfaces';
import { getAllService } from '../service';
import { IParamsCategory } from '@server/interfaces';

export async function GET(
 _req: NextRequest,
 { params }: { params: IParamsCategory },
): Promise<
 | NextResponse<IServices[] | null>
 | NextResponse<{
    error: string;
   }>
> {
 try {
  const { category } = params;
  const jsonServices = await getAllService();

  const services: IServices[][] = JSON.parse(jsonServices);

  const filteredServicesBySubCategory = services
   .filter((s) => {
    return s[0].category.latin === category;
   })
   .flat();
  if (!filteredServicesBySubCategory.length) {
   return NextResponse.json(null, { status: 200 });
  }
  return NextResponse.json(filteredServicesBySubCategory, { status: 200 });
 } catch (error) {
  return NextResponse.json({ error: 'ошибка получения товаров' }, { status: 500 });
 }
}
