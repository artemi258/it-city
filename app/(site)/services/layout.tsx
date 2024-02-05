import { SubMenu } from '@/app/components';
import { IMenu } from '@/interfaces/menu.interface';

export default function ServicesLayout({ children }: { children: React.ReactNode }): JSX.Element {
 const menu: IMenu[] = [
  { title: 'Заправка картриджей', href: '/services' },
  { title: 'Ремонт принтеров', href: '/services/printers' },
  { title: 'Ремонт компьютеров и ноутбуков', href: '/services/repairs' },
 ];
 return (
  <>
   <SubMenu menu={menu} />
   {children}
  </>
 );
}
