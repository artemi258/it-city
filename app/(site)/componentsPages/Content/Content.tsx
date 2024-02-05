import { IContentProps } from './Content.props';

import styles from './Content.module.scss';
import { Menu } from '@/app/components';
import { IMenu } from '@/interfaces/menu.interface';
import { API } from '@/api/requests';

export const Content = async ({ children }: IContentProps): Promise<JSX.Element> => {
 const fetchingMenu = await API.product.getMenuShop();
 const fetchingSubMenu = await API.product.getSubMenuShop(fetchingMenu[0].latin);
 const menu: IMenu[] = [
  { title: 'О нас', href: '/' },
  { title: 'прайс на услуги', href: '/services' },
  { title: 'магазин', href: `/shop/${fetchingMenu[0].latin}/${fetchingSubMenu[0].latin}` },
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
