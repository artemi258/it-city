import { revalidatePath } from 'next/cache';

export default async function PostProduct(data: FormData) {
 //  const formData = new FormData();
 //  let key: keyof typeof data;
 //  for (key in data) {
 //   const file = data[key] as unknown as File[];
 //   if (key === 'image') formData.append(key, file[0]);
 //   formData.append(key, data[key]);
 //  }

 fetch('http://localhost:3001/api/product', {
  method: 'POST',
  body: data,
 });
}

export const GetProducts = async () => {
 'use server';
 const res = await fetch('http://localhost:3001/api/product', {
  method: 'GET',
  next: { tags: ['prod'] },
 });
 return await res.json();
};
