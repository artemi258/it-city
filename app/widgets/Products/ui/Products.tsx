'use client';

import { ProductsList } from '@entities/products';
import { Search, MoreButton } from '@features/products';
import { useParams } from 'next/navigation';

export const Products = (): JSX.Element => {
 const { categories } = useParams();

 return (
  <div>
   <Search />
   <ProductsList categories={categories} />
   <MoreButton categories={categories} />
  </div>
 );
};
