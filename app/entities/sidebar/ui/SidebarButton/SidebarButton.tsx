import { IButtonProps } from './SidebarButton.props';
import cn from 'classnames';
import styles from './styles/SidebarButton.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { item } from './styles/animations';

export const SidebarButton = ({
 children,
 handleSubMenuOpen,
 isOpenSubMenu,
 href,
 title,
 catogory,
 pathname,
 number,
 numberOpenMenu,
 isMobile,
}: IButtonProps): JSX.Element => {
 return (
  <>
   {catogory === 'product' && (
    <motion.li variants={isMobile ? item : undefined} className={styles.navList}>
     <span
      className={cn(styles.arrow, {
       [styles.arrowRotate]: numberOpenMenu === number && isOpenSubMenu,
      })}>
      ▲
     </span>
     <button className={cn(styles.btn)} onClick={(): void => handleSubMenuOpen(number)}>
      {title}
     </button>
     {children}
    </motion.li>
   )}
   {catogory === 'service' && (
    <motion.li variants={isMobile ? item : undefined} className={styles.li} key={title}>
     <Link className={cn(styles.link, { [styles.active]: pathname === href })} href={href}>
      {title}
     </Link>
    </motion.li>
   )}
  </>
 );
};
