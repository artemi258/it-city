'use client';

import { usePathname } from 'next/navigation';
import FormAdminPanel from '../../componentsAdminPanel/FormAdminPanel/FormAdminPanel';
import ProductsAdminPanel from '../../componentsAdminPanel/ProductsAdminPanel/ProductsAdminPanel';

export default function AdminPanel(): JSX.Element {
 const path: string = usePathname().split('/').pop() ?? '';
 return (
  <div>
   <FormAdminPanel path={path} />
   <ProductsAdminPanel path={path} />
  </div>
 );
}
