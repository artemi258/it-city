import { FormAdminPanel, ProductsAdminPanel } from '@/app/(adminPanel)/componentsAdminPanel';

export default function Stationery(): JSX.Element {
 return (
  <div>
   <FormAdminPanel path={'stationery'} />
   <ProductsAdminPanel path={'stationery'} />
  </div>
 );
}
