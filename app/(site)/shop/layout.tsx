'use client';

import { Htag, Menu, Search, SubMenu } from '@/app/components';
import { API } from '@/api/requests';
import { IMenu } from '@/interfaces/menu.interface';
import { useEffect, useState } from 'react';

import styles from './layout.module.scss';
import { useParams } from 'next/navigation';

export default function ShopLayout({ children }: { children: React.ReactNode }): JSX.Element {
 const { category, subCategory } = useParams();

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
   {(category || subCategory) && <SubMenu />}
   {category && !subCategory && <Search />}
   {children}
  </>
 );
}
