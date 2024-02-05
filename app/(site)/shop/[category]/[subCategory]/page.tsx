'use client';

import { useEffect, useState } from 'react';
import { Products } from '@/app/components';

export default function ProductsPages(): JSX.Element {
 useEffect(() => {
  //   window.scrollTo(0, 500);
 }, []);
 return (
  <>
   <Products />
  </>
 );
}
