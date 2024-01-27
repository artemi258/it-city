import { IForm } from '../(adminPanel)/componentsAdminPanel/FormAdminPanel/FormAdminPanel.props';
import { IProductWithId } from '../../interfaces/product';

const baseURL = 'http://localhost:3001/';

export async function PostProduct(data: IForm): Promise<Response> {
 const formData = new FormData();
 let key: keyof typeof data;
 for (key in data) {
  if (key === 'image') {
   formData.append(key, data[key][0]);
  } else {
   formData.append(key, data[key]);
  }
 }
 data.image = data.image[0];
 console.log(data.image);
 return fetch(`${baseURL}api/product`, {
  method: 'POST',
  body: formData,
 });
}

export const GetProducts = async (path: string): Promise<IProductWithId[]> => {
 const res = await fetch(`${baseURL}api/product/${path}`, {
  method: 'GET',
 });
 return await res.json();
};
