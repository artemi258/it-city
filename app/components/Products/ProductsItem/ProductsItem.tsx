'use client';

import Image from 'next/image';
import { IProductsItemProps } from './ProductsItem.props';

import plug from './plug.jpg';

import styles from './ProductsItem.module.scss';

export const ProductsItem = ({ id, descr, price, image }: IProductsItemProps): JSX.Element => {
 return (
  <li className={styles.productsItem} key={id}>
   <div className={styles.img}>
    <Image fill src={image ? image : plug} alt={descr} />
   </div>
   <div className={styles.wrapper}>
    <p className={styles.descr}>{descr}</p>
    <div className={styles.price}>{price}₽</div>
   </div>
  </li>
 );
};
