'use client';

import { Htag, Menu, SubMenu } from '@/app/components';
import { API } from '@/api/requests';
import { IMenu } from '@/interfaces/menu.interface';

import styles from './layout.module.scss';
import { useEffect, useState } from 'react';

export default function ShopLayout({ children }: { children: React.ReactNode }): JSX.Element {
 const [menu, setMenu] = useState<IMenu[]>([]);
 const getMenu = async (): Promise<void> => {
  const fetchingMenu = await API.product.getMenuShop();
  setMenu(
   fetchingMenu.map((m, i) => ({
    title: m.ru,
    href: `/shop/${m.latin}`,
   })),
  );
 };

 useEffect(() => {
  getMenu();
 }, []);

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
