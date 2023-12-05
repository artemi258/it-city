'use client';

import Link from 'next/link';
import { IMenuProps } from './Menu.props';
import { routes } from './const';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

import styles from './Menu.module.scss';

export const Menu = ({ type }: IMenuProps): JSX.Element => {
 const pathname = usePathname();

 return (
  <div className={styles.menu}>
   {routes[type].map((menu) => {
    return (
     <Link
      key={menu.title}
      className={cn(styles.link, { [styles.active]: pathname === menu.href })}
      href={menu.href}>
      {menu.title}
     </Link>
    );
   })}
  </div>
 );
};
