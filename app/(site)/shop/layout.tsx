'use client';

import { Htag, Menu, SubMenu } from '@/app/components';
import { API } from '@/api/requests';
import { IMenu } from '@/interfaces/menu.interface';

import styles from './layout.module.scss';

export default async function ShopLayout({
 children,
}: {
 children: React.ReactNode;
}): Promise<JSX.Element> {
 const fetchingMenu = await API.product.getMenuShop();
 const menu: IMenu[] = fetchingMenu.map((m, i) => ({
  title: m.ru,
  href: `/shop/${m.latin}`,
 }));

 return (
  <>
   <Htag classn={styles.title} tag='h2'>
    Каталог
   </Htag>
   <Menu menu={menu} />
   <SubMenu />
   {children}
  </>
 );
}
