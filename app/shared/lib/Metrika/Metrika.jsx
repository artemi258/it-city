'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function YandexMetrika() {
 const pathname = usePathname();
 const searchParams = useSearchParams();

 useEffect(() => {
  const url = `${pathname}?${searchParams}`;
  // eslint-disable-next-line no-undef
  ym(82125913, 'hit', url);
 }, [pathname, searchParams]);

 return null;
}
