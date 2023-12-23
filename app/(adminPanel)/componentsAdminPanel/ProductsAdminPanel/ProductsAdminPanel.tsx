'use client';

import { useEffect, useState } from 'react';
import { IProduct, IProductsAdminPanelProps } from './ProductsAdminPanel.props';
import Image from 'next/image';

import styles from './ProductsAdminPanel.module.scss';
import { Htag } from '@/app/components';

export default function ProductsAdminPanel(props: IProductsAdminPanelProps): JSX.Element {
 const [products, setProducts] = useState<IProduct[]>([]);

 useEffect(() => {
  fetch('http://localhost:3001/api/product', {
   method: 'GET',
  })
   .then((res) => res.json())
   .then((res) => setProducts(res));
 }, []);
 return (
  <ul className={styles.productsAdminPanel}>
   {products.map((prod) => {
    const descr =
     prod.description.length > 75 ? `${prod.description.slice(0, 75)}...` : prod.description;
    return (
     <li className={styles.cart} key={prod._id}>
      <div className={styles.img}>
       <Image fill src={`data:image/png;base64, ${prod.image}`} alt={prod.title} />
      </div>
      <div className={styles.wrapper}>
       <Htag classn={styles.title} tag='h3'>
        {prod.title}
       </Htag>
       <p className={styles.descr}>{descr}</p>
       <div className={styles.price}>{prod.price}₽</div>
      </div>
     </li>
    );
   })}
  </ul>
 );
}
