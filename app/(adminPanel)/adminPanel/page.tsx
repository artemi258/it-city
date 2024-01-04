import FormAdminPanel from '../componentsAdminPanel/FormAdminPanel/FormAdminPanel';
import ProductsAdminPanel from '../componentsAdminPanel/ProductsAdminPanel/ProductsAdminPanel';
import ProductsItem from '../componentsAdminPanel/ProductsAdminPanel/ProductsItem';

export default function AdminPanel(): JSX.Element {
 return (
  <div>
   <FormAdminPanel />
   <ProductsAdminPanel>
    <ProductsItem />
   </ProductsAdminPanel>
  </div>
 );
}
