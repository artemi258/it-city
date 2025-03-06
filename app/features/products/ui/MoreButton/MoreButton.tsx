'use client';

import {
 getProducts,
 getProductsByCategory,
 getProductsBySubCategory,
 IProductsState,
} from '@entities/products';
import { Button, useAppDispatch, useAppSelector } from '@shared';
import { useState } from 'react';

import styles from './styles/moreButton.module.scss';
import { IMoreButtonProps } from './MoreButton.props';
import { useSearchParams } from 'next/navigation';

export const MoreButton = ({ categories }: IMoreButtonProps): JSX.Element => {
 const [offset, setOffset] = useState<number>(0);
 const dispatch = useAppDispatch();
 const search = useSearchParams().get('search');
 const { last } = useAppSelector<IProductsState>((state) => state.products);
 const addingMoreProducts = (): void => {
  setOffset((prev) => prev + 18);
  if (!categories) {
   dispatch(getProducts({ offset: offset + 18, search }));
  } else if (categories[0] && !categories[1]) {
   dispatch(getProductsByCategory({ category: categories[0], offset: offset + 18, search }));
  } else if (categories[0] && categories[1]) {
   dispatch(
    getProductsBySubCategory({
     category: categories[0],
     subCategory: categories[1],
     offset: offset + 18,
     search,
    }),
   );
  }
 };

 return (
  <>
   {!last && (
    <Button onClick={addingMoreProducts} className={styles.btn}>
     еще
    </Button>
   )}
  </>
 );
};
