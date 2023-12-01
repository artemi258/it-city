import { Menu } from '@/components/Menu/Menu';
import styles from './Content.module.scss';
import { IContentProps } from './Content.props';

export const Content = ({ children }: IContentProps): JSX.Element => {
 return (
  <section className={styles.content}>
   <div className='container'>
    <Menu />
    {children}
   </div>
  </section>
 );
};
