import { useRef, useState } from 'react';
import { useMenuHeight, useStickyMenu } from '../model';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { SidebarMenuList } from '@entities/sidebar';

import styles from './styles/sidebarMenuController.module.scss';
import { ISidebarMenuControllerProps } from './SidebarMenuControllerProps';

export const SidebarMenuController = ({
 category,
 pathname,
}: ISidebarMenuControllerProps): JSX.Element => {
 const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
 const [numberOpenMenu, setNumberOpenMenu] = useState<number | null>(null);
 const [menuElement, setMenuElement] = useState<HTMLUListElement | null>(null);
 const { menuHeight } = useMenuHeight(menuElement);
 const { categories } = useParams();
 const route = useRouter();
 const ref = useRef<HTMLUListElement | null>(null);
 const refWrp = useRef<HTMLDivElement>(null);
 const { endScroll, top, isSticky } = useStickyMenu(menuHeight, ref, refWrp);
 const widthSidebar = refWrp.current?.getBoundingClientRect().width;
 const inlineStyles = {
  width: `${widthSidebar}px`,
  position: isSticky ? 'fixed' : 'absolute',
  top: isSticky === 'top' ? 0 : !isSticky && top?.current ? `${top.current}px` : undefined,
  bottom: isSticky === 'bottom' || (!isSticky && endScroll === 'bottom') ? 0 : undefined,
 };
 const handleRef = (node: HTMLUListElement | null): void => {
  if (node) {
   setMenuElement(node);
   ref.current = node;
  }
 };

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
  <div
   style={{
    minHeight: menuHeight ? `${menuHeight}px` : undefined,
   }}
   ref={refWrp}
   className={styles.wrp}>
   <SidebarMenuList
    isOpenSubMenu={isOpenSubMenu}
    numberOpenMenu={numberOpenMenu}
    pathname={pathname}
    setIsOpenSubMenu={setIsOpenSubMenu}
    setNumberOpenMenu={setNumberOpenMenu}
    category={category}
    isMobile={false}
    handleSubMenuOpen={handleSubMenuOpen}
    inlineStyles={inlineStyles}
    categories={categories}
    handleRef={handleRef}
   />
  </div>
 );
};
