'use client';

import { useEffect, useRef } from 'react';

export const useThrottle = (fn: () => void, delay: number): (() => void) => {
 const isDelay = useRef<boolean>(false);
 const timeoutId = useRef<NodeJS.Timeout | null>(null);

 useEffect(() => {
  return (): void => {
   if (timeoutId.current) clearTimeout(timeoutId.current);
  };
 }, []);

 return (): void => {
  if (!isDelay.current) {
   fn();
   isDelay.current = true;
   timeoutId.current = setTimeout(() => (isDelay.current = false), delay);
  }
 };
};
