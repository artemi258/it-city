'use client';

import { Menu } from '@/components/Menu/Menu';
import { IContentProps } from './Content.props';

import styles from './Content.module.scss';

export const Content = ({ children }: IContentProps): JSX.Element => {
 return (
  <section className={styles.content}>
   <div className='container'>
    <Menu type='content' />
    {children}
   </div>
  </section>
 );
};
