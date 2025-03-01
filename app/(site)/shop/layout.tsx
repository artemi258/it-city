import { ProductsPage } from '@pages';

export default function ShopLayout({ children }: { children: React.ReactNode }): JSX.Element {
 return <ProductsPage>{children}</ProductsPage>;
}
