'use client';

import { useEffect, useState } from 'react';
import { GetProducts } from '@/app/api/requests';
import ProductsAdminPanelItem from './ProductsAdminPanelItem/ProductsAdminPanelItem';
import { IProductWithId } from '@/interfaces/product';
import { Button } from '@/app/components';

import styles from './ProductsAdminPanel.module.scss';
import { motion } from 'framer-motion';
import { fadeInChildren, fadeInParent } from '@/utils/animations';

export default function ProductsAdminPanel(): JSX.Element {
 const [products, setProducts] = useState<IProductWithId[]>([]);
 const [quantity, setQuantity] = useState<number>(8);

 useEffect(() => {
  GetProducts().then((res) => setProducts(res));
 }, []);

 const onclick = (): void => setQuantity((state) => state + 8);

 return (
  <div className={styles.productsAdminPanel}>
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
   {products.length - 1 <= quantity ? (
    <span className={styles.text}>показаны все товары</span>
   ) : (
    <Button onClick={onclick} className={styles.btn}>
     еще
    </Button>
   )}
  </div>
 );
}
