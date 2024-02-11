'use client';

import { useEffect, useState } from 'react';
import { IProductsProps } from './Products.props';
import { IProductWithId } from '@/interfaces/product.interface';
import { API, GetProducts } from '@/api/requests';
import { Button, Htag, Skeleton } from '@/app/components';
import { motion } from 'framer-motion';
import { fadeInChildren } from '@/utils/animations';

import styles from './Products.module.scss';
import { ProductsItem } from './ProductsItem/ProductsItem';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../../hooks/store.hook';
import {
 IProductsState,
 clearProducts,
 getProductsBySubCategory,
 getProductsByCategory,
} from './ProductsSlice';

export const Products = (): JSX.Element => {
 const { category, subCategory } = useParams();
 const [offset, setOffset] = useState<number>(0);
 const dispatch = useAppDispatch();
 const { products, loading, error } = useAppSelector<IProductsState>((state) => state.products);

 useEffect(() => {
  products.length && dispatch(clearProducts());
  offset && setOffset(0);
  subCategory
   ? dispatch(getProductsBySubCategory({ subCategory: subCategory as string, offset: 0 }))
   : dispatch(getProductsByCategory({ category: category as string, offset: 0 }));
 }, [category, subCategory]);

 const addingMoreProducts = (): void => {
  setOffset((prev) => prev + 12);
  subCategory
   ? dispatch(getProductsBySubCategory({ subCategory: subCategory as string, offset: offset + 12 }))
   : dispatch(getProductsByCategory({ category: category as string, offset: offset + 12 }));
 };

 return (
  <div className={styles.products}>
   {!!products.length && (
    <ul className={styles.wrapper}>
     {products.map(({ _id, name, price, image }) => (
      <ProductsItem id={_id} name={name} image={image} price={price} key={_id} />
     ))}
    </ul>
   )}
   {loading && <Skeleton />}
   {products.length < offset + 12 ? null : (
    <Button onClick={addingMoreProducts} className={styles.btn}>
     еще
    </Button>
   )}
  </div>
 );
};
