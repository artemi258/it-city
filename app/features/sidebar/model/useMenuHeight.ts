import { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';

export const useMenuHeight = (
 ref: HTMLUListElement | null,
): {
 menuHeight: number;
} => {
 const [menuHeight, setMenuHeight] = useState<number>(0);
 const mutationObserver = useRef<MutationObserver | null>(null);
 useEffect(() => {
  if (ref) {
   mutationObserver.current = new MutationObserver((mutations) => {
    setMenuHeight(ref.offsetHeight);
   });

   mutationObserver.current.observe(ref, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style'],
   });
  }

  return (): void => {
   if (ref) {
    if (mutationObserver.current) {
     mutationObserver.current.disconnect();
    }
   }
  };
 }, [ref]);

 return { menuHeight };
};
