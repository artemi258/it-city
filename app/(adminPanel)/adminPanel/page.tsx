'use client';

import { usePathname } from 'next/navigation';
import { FormAdminPanel, ProductsAdminPanel } from '@/app/(adminPanel)/componentsAdminPanel';

export default function General(): JSX.Element {
 const path: string = usePathname().split('/').pop() ?? '';
 return (
  <div>
   <FormAdminPanel path={path} />
   <ProductsAdminPanel />
  </div>
 );
}
