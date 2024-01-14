import { IForm } from '../(adminPanel)/componentsAdminPanel/FormAdminPanel/FormAdminPanel.props';

const baseURL = 'http://localhost:3001/';

export async function PostProduct(data: IForm): Promise<Response> {
 const formData = new FormData();
 let key: keyof typeof data;
 for (key in data) {
  formData.append(key, data[key]);
 }

 return fetch(`${baseURL}products`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
 });
}

export const GetProducts = async () => {
 const res = await fetch(`${baseURL}products`, {
  method: 'GET',
 });
 return await res.json();
};
