'use client';

import Image from 'next/image';
import { IProductsItemProps } from './ProductsItem.props';

import plug from './plug.jpg';

import { motion } from 'framer-motion';
import { fadeInChildren } from '../../../../utils/animations';

import styles from './ProductsItem.module.scss';

export const ProductsItem = ({ id, descr, price, image }: IProductsItemProps): JSX.Element => {
 return (
  <motion.li
   initial='hidden'
   animate='visible'
   variants={fadeInChildren}
   className={styles.productsItem}
   key={id}>
   <div className={styles.img}>
    <Image fill src={image ? image : plug} alt={descr} />
   </div>
   <div className={styles.wrapper}>
    <p className={styles.descr}>{descr}</p>
    <div className={styles.price}>{price}₽</div>
   </div>
  </motion.li>
 );
};
