'use client';

import Link from 'next/link';
import { IMenuProps } from './Menu.props';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

import styles from './Menu.module.scss';

export const Menu = ({ menu }: IMenuProps): JSX.Element => {
 const pathname = usePathname();
 return (
  <div className={styles.menu}>
   {menu.map((m) => {
    const regExp = new RegExp(`${m.href}/`);
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
 );
};
