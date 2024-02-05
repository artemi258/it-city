'use client';

import Link from 'next/link';
import cn from 'classnames';
import { useParams, usePathname } from 'next/navigation';

import styles from './Menu.module.scss';
import { IMenuProps } from './Menu.props';
import { memo, useEffect, useState } from 'react';
import { API } from '@/api/requests';
import { IMenu } from '@/interfaces/menu.interface';
import { SkeletonMenu } from '..';

export const SubMenu = ({ menu }: Partial<IMenuProps>): JSX.Element => {
 const { category } = useParams();

 const [loading, setLoading] = useState<boolean>(false);
 const [subCategories, setSubCategories] = useState<{ latin: string; ru: string }[]>([]);
 console.log(subCategories);
 const fetchingSubMenu = async () => {
  await API.product.getSubMenuShop(category as string).then((res) => {
   setSubCategories(res);
   setLoading(false);
   console.log('GET');
  });
 };
 useEffect(() => {
  menu ?? setLoading(true);
  menu ?? fetchingSubMenu();
 }, []);

 const subMenu: IMenu[] = !menu
  ? subCategories.map((m, i) => ({
     title: m.ru,
     href: `${m.latin}`,
    }))
  : menu;

 const pathname = usePathname();
 return (
  <>
   {loading && <SkeletonMenu />}
   {!loading && (
    <div className={styles.menu}>
     {subMenu.map((m) => {
      const regExp = new RegExp(`${m.href}`);

      return (
       <Link
        key={m.title}
        className={cn(styles.link, {
         [styles.active]: pathname === m.href || regExp.test(pathname),
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
