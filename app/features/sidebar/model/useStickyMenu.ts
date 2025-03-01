import { useThrottle } from '@shared';
import { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';

export const useStickyMenu = (
 menuHeight: number,
 ref: RefObject<HTMLUListElement>,
 refWrp: RefObject<HTMLDivElement>,
): {
 top: MutableRefObject<number>;
 endScroll: 'top' | 'bottom' | null;
 isSticky: 'top' | 'bottom' | null;
} => {
 const [isSticky, setIsSticky] = useState<'top' | 'bottom' | null>(null);

 const top = useRef<number>(0);
 const refEndScroll = useRef<'top' | 'bottom' | null>('top');
 const refPrevScrollY = useRef(0);
 const handleScroll = (): void => {
  const scrollY = window.scrollY;
  const topByScroll = (ref.current && ref.current.getBoundingClientRect().top) ?? 0;
  const bottomByScroll = (ref.current && ref.current.getBoundingClientRect().bottom) ?? 0;
  const heightParentByScroll =
   (refWrp.current && refWrp.current.getBoundingClientRect().height) ?? 0;
  const bottomParentByScroll =
   (refWrp.current && refWrp.current.getBoundingClientRect().bottom) ?? 0;
  const topParentByScroll = (refWrp.current && refWrp.current.getBoundingClientRect().top) ?? 0;
  const viewportByScroll = window.innerHeight;
  if (menuHeight === heightParentByScroll) {
   setIsSticky(null);
   return;
  }
  top.current = 0;
  if (menuHeight < heightParentByScroll && viewportByScroll < menuHeight) {
   if (topParentByScroll >= 0) {
    setIsSticky(null);
    refEndScroll.current = 'top';
    return;
   } else if (bottomParentByScroll - viewportByScroll <= 0) {
    setIsSticky(null);
    refEndScroll.current = 'bottom';
    return;
   }

   if (
    !refEndScroll.current &&
    menuHeight > bottomParentByScroll &&
    refPrevScrollY.current < scrollY
   ) {
    setIsSticky('bottom');
   }

   if (bottomByScroll - viewportByScroll <= 0 && refPrevScrollY.current < scrollY) {
    setIsSticky('bottom');
    refEndScroll.current = null;
   } else if (topByScroll >= 0 && refPrevScrollY.current > scrollY) {
    setIsSticky('top');
    refEndScroll.current = null;
   }

   if (refPrevScrollY.current < scrollY && isSticky === 'top') {
    setIsSticky(null);
    top.current = heightParentByScroll - bottomParentByScroll;
   }
   if (refPrevScrollY.current > scrollY && isSticky === 'bottom') {
    setIsSticky(null);
    top.current = heightParentByScroll - bottomParentByScroll + viewportByScroll - menuHeight;
   }
  } else if (menuHeight < heightParentByScroll && menuHeight < viewportByScroll) {
   if (topParentByScroll >= 0) {
    setIsSticky(null);
    refEndScroll.current = 'top';
    return;
   }

   if (bottomParentByScroll - viewportByScroll <= 0) {
    setIsSticky('top');
    refEndScroll.current = 'bottom';
    return;
   }

   if (bottomParentByScroll > viewportByScroll) {
    setIsSticky('top');
    refEndScroll.current = null;
   }

   if (topParentByScroll < 0) {
    setIsSticky('top');
   }
  }
  refPrevScrollY.current = scrollY;
 };

 const throttleScroll = useThrottle(handleScroll, 30);

 useEffect(() => {
  window.addEventListener('scroll', throttleScroll);
  return () => window.removeEventListener('scroll', throttleScroll);
 }, [menuHeight, isSticky]);

 useEffect(() => {
  handleScroll();
 }, [menuHeight]);

 return {
  top,
  endScroll: refEndScroll.current,
  isSticky,
 };
};
