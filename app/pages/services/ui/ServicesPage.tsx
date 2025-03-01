'use client';

import { Sidebar, SidebarMobile } from '@widgets';
import { IServicesProps } from './ServicesPage.props';
import cn from 'classnames';

import styles from './styles/servicesPage.module.scss';
import { useEffect, useState } from 'react';
import { BurgerButton } from '@features/burger';
import { usePathname } from 'next/navigation';

export const ServicesPage = ({ children }: IServicesProps): JSX.Element => {
 const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
 const pathname = usePathname();

 const mediaQuery = window.matchMedia('(max-width: 991px)');
 const [isMobile, setIsMobile] = useState<boolean>(mediaQuery.matches);

 useEffect(() => {
  const handleMediaChange = (e: MediaQueryListEvent): void => {
   setIsMobile(e.matches);
  };

  mediaQuery.addEventListener('change', handleMediaChange);
  return () => mediaQuery.removeEventListener('change', handleMediaChange);
 }, []);

 useEffect(() => {
  if (isOpenMobileMenu) {
   setIsOpenMobileMenu(false);
  }
 }, [pathname]);

 useEffect(() => {
  if (isOpenMobileMenu) {
   document.body.style.overflow = 'hidden';
  } else {
   document.body.style.overflow = 'auto';
  }
 }, [isOpenMobileMenu]);

 const handleCloseMenu = (): void => {
  setIsOpenMobileMenu(false);
 };

 return (
  <section className={cn(styles.services, 'container')}>
   {isMobile && !isOpenMobileMenu && (
    <BurgerButton isOpenMobileMenu={isOpenMobileMenu} setIsOpenMobileMenu={setIsOpenMobileMenu} />
   )}
   {!isMobile ? (
    <Sidebar pathname={pathname} category='service' />
   ) : (
    <SidebarMobile
     handleCloseMenu={handleCloseMenu}
     category='service'
     isOpenMobileMenu={isOpenMobileMenu}
     pathname={pathname}
    />
   )}
   {children}
  </section>
 );
};
