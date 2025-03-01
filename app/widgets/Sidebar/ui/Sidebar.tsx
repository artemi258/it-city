'use client';

import styles from './styles/Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.props';
import { SidebarMenuController } from '@features/sidebar';
import cn from 'classnames';

export const Sidebar = ({ pathname, category }: ISidebarProps): JSX.Element => {
 return (
  <aside className={cn(styles.sidebar)}>
   <SidebarMenuController pathname={pathname} category={category} />
  </aside>
 );
};
