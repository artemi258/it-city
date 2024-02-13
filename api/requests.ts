import { IForm } from '../app/(adminPanel)/componentsAdminPanel/FormAdminPanel/FormAdminPanel.props';
import { IAuth } from '@/app/(adminPanel)/componentsAdminPanel/FormAuth/auth.interface';
import { IProductWithId } from '@/interfaces/product.interface';
import { useHttp } from '@/hooks/http.hook';

const baseURL = 'http://localhost:3001';
const { request } = useHttp();

export const API = {
 product: {
  getMenuShop: (): Promise<
   {
    latin: string;
    ru: string;
   }[]
  > => request(`${baseURL}/api/product/category`),

  getSubMenuShop: (
   category: string,
  ): Promise<
   {
    latin: string;
    ru: string;
   }[]
  > => request(`${baseURL}/api/product/subCategory/${category}`),

  getProductsBySubCategory: ({
   subCategory,
   offset,
  }: {
   subCategory: string;
   offset: number;
  }): Promise<IProductWithId[]> =>
   request(`${baseURL}/api/product/bySubCategory/${subCategory}?offset=${offset}&limit=12`),

  getProductsByCategory: ({
   category,
   offset,
  }: {
   category: string;
   offset: number;
  }): Promise<IProductWithId[]> =>
   request(`${baseURL}/api/product/byCategory/${category}?offset=${offset}&limit=12`),
  searchProduct: ({
   value,
   category,
  }: {
   value: string;
   category: string;
  }): Promise<IProductWithId[]> =>
   request(`${baseURL}/api/product/search/${category}/?text=${value}`),
 },
};

export async function PostProduct(data: any): Promise<Response> {
 const formData = new FormData();

 formData.append('exel', data['exel'][0]);

 return fetch(`${baseURL}/api/product`, {
  method: 'POST',
  body: formData,
 });
}

export const GetProducts = async (path: string = 'general'): Promise<IProductWithId[]> => {
 const res = await fetch(`${baseURL}api/product/${path}`, {
  method: 'GET',
 });
 return await res.json();
};

export const Auth = async (data: IAuth): Promise<{ auth: boolean }> => {
 const res = await fetch(`${baseURL}api/auth`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
 });
 return await res.json();
};
