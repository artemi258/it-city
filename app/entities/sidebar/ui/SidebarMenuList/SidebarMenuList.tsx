'use client';

import styles from './styles/sidebarMenuList.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { SidebarButton } from '../SidebarButton/SidebarButton';
import { SidebarSubButton } from '../SidebarSubButton/SidebarSubButton';
import { useEffect, useState } from 'react';
import { IMenu, IMenuWithSubMenu, SkeletonMenu } from '@shared';
import { getMenu } from '@entities/sidebar/model';
import { ISidebarMenuListProps } from './SidebarMenuList.props';

export const SidebarMenuList = ({
 isOpenSubMenu,
 handleSubMenuOpen,
 category,
 categories,
 isMobile,
 inlineStyles,
 handleRef,
 pathname,
 numberOpenMenu,
 setNumberOpenMenu,
 setIsOpenSubMenu,
}: ISidebarMenuListProps): JSX.Element => {
 const [menu, setMenu] = useState<IMenu[] | IMenuWithSubMenu[] | null | undefined>([]);

 useEffect(() => {
  getMenu(category)?.then((m) => {
   if (m && categories) {
    const regExp = new RegExp(`${categories[0]}`);
    for (let i = 0; i < m.length; i++) {
     if (m[i].href.match(regExp)) {
      setNumberOpenMenu(i);
      setIsOpenSubMenu(true);
      break;
     }
    }
   }
   setMenu(m);
  });
 }, []);

 return (
  <>
   {!menu ? (
    <div className={styles.error}>не удалось получить меню&#128532;</div>
   ) : !menu.length ? (
    <SkeletonMenu />
   ) : (
    <ul ref={handleRef} style={inlineStyles} className={styles.menu}>
     {menu?.map((m, i) => {
      return (
       <SidebarButton
        isMobile={isMobile}
        catogory={category}
        handleSubMenuOpen={handleSubMenuOpen}
        number={i}
        href={m.href}
        numberOpenMenu={numberOpenMenu}
        isOpenSubMenu={isOpenSubMenu}
        pathname={pathname}
        title={m.title}
        key={m.title}>
        {'subMenu' in m && (
         <AnimatePresence>
          <motion.ul
           initial={{ opacity: 0, y: -10, display: 'none' }}
           animate={
            numberOpenMenu === i && isOpenSubMenu
             ? { opacity: 1, y: 0, display: 'grid' }
             : { opacity: 0, y: -10, transitionEnd: { display: 'none' } }
           }
           transition={{ duration: 0.2 }}
           className={styles.subMenu}>
           {m.subMenu.map((sm) => {
            return (
             <SidebarSubButton pathname={pathname} key={sm.title} href={sm.href} title={sm.title} />
            );
           })}
          </motion.ul>
         </AnimatePresence>
        )}
       </SidebarButton>
      );
     })}
    </ul>
   )}
  </>
 );
};
