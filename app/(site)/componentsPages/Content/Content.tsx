import { IContentProps } from './Content.props';

import styles from './Content.module.scss';
import { Menu } from '@/app/components';

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
