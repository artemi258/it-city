'use client';

import { useEffect, useState } from 'react';
import styles from './Products.module.scss';
import { IProductsProps } from './Products.props';
import { IProductWithId } from '@/interfaces/product';
import { GetProducts } from '@/api/requests';
import { Button, Htag, Skeleton } from '@/app/components';
import { motion } from 'framer-motion';
import { fadeInChildren } from '@/utils/animations';

export default function Products(props: IProductsProps): JSX.Element {
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
  <div className={styles.products}>
   <Htag tag='h2' classn={styles.title}>
    {path === 'general' ? 'Общие товары' : 'Канцелярия'}
   </Htag>
   {loading ? (
    <Skeleton />
   ) : (
    <motion.ul
     initial='hidden'
     animate='visible'
     variants={fadeInChildren}
     className={styles.products}>
     {products.slice(0, quantity).map(({ id, title, description, price, image }) => (
      <ProductsAdminPanelItem
       id={id}
       description={description}
       image={image}
       price={price}
       title={title}
       key={id}
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
}
