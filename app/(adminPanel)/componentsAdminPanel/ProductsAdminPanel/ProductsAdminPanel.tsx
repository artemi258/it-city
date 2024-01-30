'use client';

import { useEffect, useState } from 'react';
import { GetProducts } from '@/app/api/requests';
import ProductsAdminPanelItem from './ProductsAdminPanelItem/ProductsAdminPanelItem';
import { IProductWithId } from '@/interfaces/product';
import { Button, Htag, Skeleton } from '@/app/components';
import { motion } from 'framer-motion';
import { fadeInChildren } from '@/utils/animations';
import { IProductsAdminPanelProps } from './ProductsAdminPanel.props';

import styles from './ProductsAdminPanel.module.scss';

export const ProductsAdminPanel = ({ path }: IProductsAdminPanelProps): JSX.Element => {
 const [products, setProducts] = useState<IProductWithId[]>([]);
 const [quantity, setQuantity] = useState<number>(8);
 const [loading, setLoading] = useState<boolean>(false);

 useEffect(() => {
  setLoading(true);
  GetProducts(path).then((res) => {
   setLoading(false);
   setProducts(res);
  });
 }, []);

 const onclick = (): void => setQuantity((state) => state + 8);

 return (
  <div className={styles.productsAdminPanel}>
   <Htag tag='h2' classn={styles.title}>
    {path ? 'Канцелярия' : 'Общие товары'}
   </Htag>
   {loading ? (
    <Skeleton />
   ) : (
    <motion.ul
     initial='hidden'
     animate='visible'
     variants={fadeInChildren}
     className={styles.products}>
     {products.slice(0, quantity).map(({ _id, title, description, price, image }) => (
      <ProductsAdminPanelItem
       id={_id}
       description={description}
       image={image}
       price={price}
       title={title}
       key={_id}
      />
     ))}
    </motion.ul>
   )}
   {products.length - 1 <= quantity ? null : (
    <Button onClick={onclick} className={styles.btn}>
     еще
    </Button>
   )}
  </div>
 );
};
