import { IContentProps } from './Content.props';
import { Menu } from '..';

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
