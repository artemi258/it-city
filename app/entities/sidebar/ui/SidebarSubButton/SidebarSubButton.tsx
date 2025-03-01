'use client';

import { ISubButton } from './SidebarSubButton.props';
import cn from 'classnames';
import styles from './styles/SidebarSubButton.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const SidebarSubButton = ({ href, title, pathname }: ISubButton): JSX.Element => {
 return (
  <motion.li key={title} className={styles.subNavList}>
   <Link className={cn(styles.link, { [styles.active]: pathname === href })} href={href}>
    {title}
   </Link>
  </motion.li>
 );
};
