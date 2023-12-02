'use client';

import Link from 'next/link';
import { IMenuProps } from './Menu.props';
import { data } from './const';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

import styles from './Menu.module.scss';

export const Menu = (props: IMenuProps): JSX.Element => {
 const pathname = usePathname();

 return (
  <div className={styles.menu}>
   {data.map((menu) => {
    return (
     <Link
      className={cn(styles.link, { [styles.active]: pathname === menu.href })}
      href={menu.href}>
      {menu.title}
     </Link>
    );
   })}
  </div>
 );
};
