'use client';

import { useEffect } from 'react';

import styles from './styles/productsList.module.scss';
import { useAppDispatch, useAppSelector, Skeleton, Htag } from '@shared';
import {
 IProductsState,
 getProductsBySubCategory,
 getProductsByCategory,
 clearProducts,
 getProducts,
} from '../../model';
import { List } from '../List/List';
import { IProductsListProps } from './ProductsList.props';
import { useSearchParams } from 'next/navigation';

export const ProductsList = ({ categories = [] }: IProductsListProps): JSX.Element => {
 const dispatch = useAppDispatch();
 const search = useSearchParams().get('search');
 const { products, loading, error } = useAppSelector<IProductsState>((state) => state.products);
 useEffect(() => {
  products.length && dispatch(clearProducts());
  if (!categories.length) {
   dispatch(getProducts({ offset: 0, search }));
  } else if (categories[0] && !categories[1]) {
   dispatch(getProductsByCategory({ category: categories[0], offset: 0, search }));
  } else if (categories[0] && categories[1]) {
   dispatch(
    getProductsBySubCategory({
     category: categories[0],
     subCategory: categories[1],
     offset: 0,
     search,
    }),
   );
  }
 }, [categories[0], categories[1], search]);

 return (
  <>
   {error && !loading && (
    <Htag tag='h6' classn={styles.error}>
     {error} &#128532;
    </Htag>
   )}
   {!error && products.length ? (
    <ul className={styles.wrapper}>
     {products.map(({ id, name, price, image, isStock }) => (
      <List id={id} isStock={isStock} name={name} image={image} price={price} key={id} />
     ))}
    </ul>
   ) : null}
   {loading && <Skeleton />}
  </>
 );
};
