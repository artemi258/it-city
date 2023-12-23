import FormAdminPanel from '../componentsAdminPanel/FormAdminPanel/FormAdminPanel';
import ProductsAdminPanel from '../componentsAdminPanel/ProductsAdminPanel/ProductsAdminPanel';

export default function AdminPanel(): JSX.Element {
 return (
  <div>
   <FormAdminPanel />
   <ProductsAdminPanel />
  </div>
 );
}
