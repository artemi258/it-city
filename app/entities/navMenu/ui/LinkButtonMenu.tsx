'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from './styles/LinkButton.module.scss';
import { ILinkButtonProps } from './LinkButtonMenu.props';

export const LinkButtonMenu = ({ title, href, active }: ILinkButtonProps): JSX.Element => {
 const pathname = usePathname();
 const regExp = new RegExp(`/${active}`);

 return (
  <li key={title}>
   <Link
    className={cn(styles.link, { [styles.active]: pathname === href || regExp.test(pathname) })}
    href={href}>
    {title}
   </Link>
  </li>
 );
};
