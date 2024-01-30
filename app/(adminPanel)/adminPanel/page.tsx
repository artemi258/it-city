import { FormAdminPanel, ProductsAdminPanel } from '@/app/(adminPanel)/componentsAdminPanel';

export default function General(): JSX.Element {
 return (
  <div>
   <FormAdminPanel />
   <ProductsAdminPanel />
  </div>
 );
}
