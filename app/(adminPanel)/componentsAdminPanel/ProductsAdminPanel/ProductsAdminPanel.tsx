'use client';

import { useEffect, useState } from 'react';
import { GetProducts } from '@/app/api/requests';
import ProductsAdminPanelItem from './ProductsAdminPanelItem/ProductsAdminPanelItem';
import { IProductWithId } from '@/interfaces/product';

import styles from './ProductsAdminPanel.module.scss';

export default function ProductsAdminPanel(): JSX.Element {
 const [products, setProducts] = useState<IProductWithId[]>([]);

 useEffect(() => {
  GetProducts().then((res) => setProducts(res));
 }, []);

 return (
  <ul className={styles.productsAdminPanel}>
   {products.map(({ id, title, description, price, image }) => (
    <ProductsAdminPanelItem
     id={id}
     description={description}
     image={image}
     price={price}
     title={title}
     key={id}
    />
   ))}
  </ul>
 );
}
