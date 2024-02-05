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
import { IProductsState, fetchProducts } from './ProductsSlice';

export const Products = (): JSX.Element => {
 const { subCategory } = useParams();
 const dispatch = useAppDispatch();
 const { products, loading, error } = useAppSelector<IProductsState>((state) => state.products);

 useEffect(() => {
  dispatch(fetchProducts(subCategory as string));
 }, []);

 return (
  <div className={styles.products}>
   {loading ? (
    <Skeleton />
   ) : (
    <motion.ul
     initial='hidden'
     animate='visible'
     variants={fadeInChildren}
     className={styles.wrapper}>
     {products.map(({ _id, descr, price, image }) => (
      <ProductsItem id={_id} descr={descr} image={image} price={price} key={_id} />
     ))}
    </motion.ul>
   )}
   {/* {products.length - 1 <= quantity ? null : (
    <Button onClick={onclick} className={styles.btn}>
     еще
    </Button>
   )} */}
  </div>
 );
};
