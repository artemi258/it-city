import { IContentProps } from './Content.props';
import { Menu } from '@/app/components';
import { IMenu } from '@/interfaces/menu.interface';

import styles from './Content.module.scss';

export const Content = async ({ children }: IContentProps): Promise<JSX.Element> => {
 const menu: IMenu[] = [
  { title: 'О нас', href: '/' },
  { title: 'прайс на услуги', href: '/services' },
  { title: 'магазин', href: '/shop' },
 ];

 return (
  <section className={styles.content}>
   <div className='container'>
    <Menu menu={menu} />
    {children}
   </div>
  </section>
 );
};
