'use client';

import { useEffect, useState } from 'react';
import { IProduct, IProductsAdminPanelProps } from './ProductsAdminPanel.props';
import Image from 'next/image';

import styles from './ProductsAdminPanel.module.scss';
import { Htag } from '@/app/components';
import ProductsItem from './ProductsItem';

export default function ProductsAdminPanel({ children }: IProductsAdminPanelProps): JSX.Element {
 const [products, setProducts] = useState<IProduct[]>([]);

 //  useEffect(() => {
 //   fetch('http://localhost:3001/api/product', {
 //    method: 'GET',
 //   })
 //    .then((res) => res.json())
 //    .then((res) => setProducts(res));
 //  }, []);
 return <ul className={styles.productsAdminPanel}>{children}</ul>;
}
