'use client';

import Link from 'next/link';
import cn from 'classnames';
import { useParams, usePathname } from 'next/navigation';
import { IMenuProps } from './Menu.props';
import { useEffect, useState } from 'react';
import { API } from '@/api/requests';
import { IMenu } from '@/interfaces/menu.interface';
import { SkeletonMenu } from '..';

import styles from './Menu.module.scss';
export const SubMenu = ({ menu }: Partial<IMenuProps>): JSX.Element => {
 const { category } = useParams();
 const [loading, setLoading] = useState<boolean>(false);
 const [subCategories, setSubCategories] = useState<{ latin: string; ru: string }[]>([]);

 const fetchingSubMenu = async (): Promise<void> => {
  await API.product.getSubMenuShop(category as string).then((res) => {
   setSubCategories(res);
   setLoading(false);
  });
 };
 useEffect(() => {
  !menu && category && setLoading(true);
  !menu && category && fetchingSubMenu();
 }, [category]);

 const subMenu: IMenu[] = !menu
  ? subCategories.map((m, i) => ({
     title: m.ru,
     href: i ? `/shop/${category}/${m.latin}` : `/shop/${category}`,
    }))
  : menu;

 const pathname = usePathname();
 return (
  <>
   {loading && <SkeletonMenu />}
   {!loading && (
    <div className={styles.menu}>
     {subMenu.map((m) => {
      return (
       <Link
        key={m.title}
        className={cn(styles.link, {
         [styles.active]: pathname === m.href,
        })}
        href={m.href}>
        {m.title}
       </Link>
      );
     })}
    </div>
   )}
  </>
 );
};
