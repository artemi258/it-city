'use client';

import { ServicesList } from '@entities/services';
import styles from './styles/services.module.scss';
import React from 'react';
import { useParams } from 'next/navigation';

export const Services = (): JSX.Element => {
 const { category } = useParams();

 return (
  <div className={styles.services}>
   <ServicesList category={category as string} />
  </div>
 );
};
