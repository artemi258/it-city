import { Menu } from '@/components/Menu/Menu';

const ServicesLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
 return (
  <>
   <Menu type='services' />
   {children}
  </>
 );
};

export default ServicesLayout;
