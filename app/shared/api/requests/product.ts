import { IHttpHook, IMenuFetch, IProductWithId } from '@shared';

export const product = (cb: IHttpHook['request']) => ({
 getMenuShop: (): Promise<IMenuFetch[]> => cb(`products/menu`),

 getSubMenuShop: (category: string): Promise<IMenuFetch[]> => cb(`products/menu/${category}`),

 getProducts: ({
  offset,
  search,
 }: {
  offset: number;
  search: string | null;
 }): Promise<{ products: IProductWithId[]; last: boolean }> =>
  cb(`products?offset=${offset}&limit=18${search ? `&search=${search}` : ''}`),
 getProductsBySubCategory: ({
  category,
  subCategory,
  offset,
  search,
 }: {
  category: string;
  subCategory: string;
  offset: number;
  search: string | null;
 }): Promise<{ products: IProductWithId[]; last: boolean }> =>
  cb(
   `products/${category}/${subCategory}?offset=${offset}&limit=18${
    search ? `&search=${search}` : ''
   }`,
  ),

 getProductsByCategory: ({
  category,
  offset,
  search,
 }: {
  category: string;
  offset: number;
  search: string | null;
 }): Promise<{ products: IProductWithId[]; last: boolean }> =>
  cb(`products/${category}?offset=${offset}&limit=18${search ? `&search=${search}` : ''}`),
 searchProduct: ({
  value,
  category,
  offset,
 }: {
  value: string;
  category: string;
  offset: number;
 }): Promise<IProductWithId[]> => cb(`products/search/${category}/?text=${value}&offset=${offset}`),
});
