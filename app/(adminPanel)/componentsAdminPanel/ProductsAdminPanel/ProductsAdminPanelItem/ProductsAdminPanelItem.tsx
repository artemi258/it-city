'use client';

import { Htag } from '@/app/components/Htag/Htag';
import Image from 'next/image';
import { IProductsAdminPanelItemProps } from './ProductsAdminPanelItem.props';

import edit from './edit.png';

import styles from './ProductsAdminPanelItem.module.scss';

export default function ProductsAdminPanelItem({
 id,
 title,
 description,
 price,
 image,
}: IProductsAdminPanelItemProps): JSX.Element {
 //  const descr = description.length > 75 ? `${description.slice(0, 75)}...` : description;
 return (
  <>
   <li className={styles.productsAdminPanelItem} key={id}>
    <button className={styles.btn}>
     <Image fill src={edit} alt='редактировать' />
    </button>
    <div className={styles.img}>
     <Image fill src={image} alt={title} />
    </div>
    <div className={styles.wrapper}>
     <Htag classn={styles.title} tag='h3'>
      {title}
     </Htag>
     {/* <p className={styles.descr}>{descr}</p> */}
     <div className={styles.price}>{price}₽</div>
    </div>
   </li>
  </>
 );
}
