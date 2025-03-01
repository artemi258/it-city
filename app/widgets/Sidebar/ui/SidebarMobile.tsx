'use client';

import styles from './styles/Sidebar.module.scss';
import { ISidebarMobileProps } from './Sidebar.props';
import { SidebarMenuControllerMobile } from '@features/sidebar';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { container } from './styles/animations';
import { CloseButton } from '@shared';

export const SidebarMobile = ({
 pathname,
 isOpenMobileMenu,
 category,
 handleCloseMenu,
}: ISidebarMobileProps): JSX.Element => {
 return (
  <motion.aside
   variants={container}
   initial={'hidden'}
   animate={isOpenMobileMenu ? 'show' : 'hidden'}
   className={cn(styles.sidebar, styles.sidebarMobile)}>
   <CloseButton cb={handleCloseMenu} classn={styles.close} />
   <SidebarMenuControllerMobile pathname={pathname} category={category} />
  </motion.aside>
 );
};
