import { Menu } from '@/app/components';

export default function ServicesLayout({ children }: { children: React.ReactNode }): JSX.Element {
 return (
  <>
   <Menu type='services' />
   {children}
  </>
 );
}
