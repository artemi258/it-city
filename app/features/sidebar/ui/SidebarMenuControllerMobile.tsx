import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { SidebarMenuList } from '@entities/sidebar';

import styles from './styles/sidebarMenuController.module.scss';
import { ISidebarMenuControllerProps } from './SidebarMenuControllerProps';

export const SidebarMenuControllerMobile = ({
 category,
 pathname,
}: ISidebarMenuControllerProps): JSX.Element => {
 const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
 const [numberOpenMenu, setNumberOpenMenu] = useState<number | null>(null);
 const { categories } = useParams();
 const route = useRouter();

 const handleSubMenuOpen = (num: number): void => {
  if (num === numberOpenMenu) {
   setIsOpenSubMenu(!isOpenSubMenu);

   if (isOpenSubMenu) {
    setNumberOpenMenu(null);
    route.push('/shop');
   }
  } else {
   if (isOpenSubMenu) {
    setNumberOpenMenu(num);
   } else {
    setNumberOpenMenu(num);
    setIsOpenSubMenu(true);
   }
  }
 };
 return (
  <div className={styles.wrp}>
   <SidebarMenuList
    isOpenSubMenu={isOpenSubMenu}
    numberOpenMenu={numberOpenMenu}
    pathname={pathname}
    setIsOpenSubMenu={setIsOpenSubMenu}
    setNumberOpenMenu={setNumberOpenMenu}
    category={category}
    isMobile={true}
    handleSubMenuOpen={handleSubMenuOpen}
    inlineStyles={undefined}
    categories={categories}
   />
  </div>
 );
};
