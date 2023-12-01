import Link from 'next/link';
import styles from './Menu.module.scss';
import { IMenuProps } from './Menu.props';
import { data } from './const';

export const Menu = (props: IMenuProps): JSX.Element => {
 return (
  <div className={styles.menu}>
   {data.map((menu) => {
    return (
     <Link className={styles.link} href={menu.href}>
      {menu.title}
     </Link>
    );
   })}
  </div>
 );
};
