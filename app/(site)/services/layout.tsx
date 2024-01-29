import { Menu } from '@/app/components';

const ServicesLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
 return (
  <>
   <Menu type='services' />
   {children}
  </>
 );
};

export default ServicesLayout;
