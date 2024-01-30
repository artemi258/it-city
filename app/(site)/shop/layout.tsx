import { Menu } from '@/app/components';

export default function ShopLayout({ children }: { children: React.ReactNode }): JSX.Element {
 return (
  <>
   <Menu type='adminPanel' />
   {children}
  </>
 );
}
