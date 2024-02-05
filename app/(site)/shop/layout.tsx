import { Menu, SubMenu } from '@/app/components';
import { API } from '@/api/requests';
import { IMenu } from '@/interfaces/menu.interface';
import { redirect } from 'next/navigation';

export default async function ShopLayout({ children }: { children: React.ReactNode }): JSX.Element {
 const fetchingMenu = await API.product.getMenuShop();
 const menu: IMenu[] = fetchingMenu.map((m, i) => ({
  title: m.ru,
  href: `/shop/${m.latin}`,
 }));

 return (
  <>
   <Menu menu={menu} />
   <SubMenu />
   {children}
  </>
 );
}
