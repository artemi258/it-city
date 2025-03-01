import { IHttpHook } from '@shared';

const baseURL = 'http://localhost:8080/api';
// const baseURL = 'https://it-city.onrender.com/api';

export const useHttp = (): IHttpHook => {
 const request = async (
  url: string,
  method: string = 'GET',
  body: BodyInit | null | undefined = null,
  headers: HeadersInit = method === 'GET' ? {} : { 'Content-Type': 'application/json' },
 ): Promise<any> => {
  const response = await fetch(`${baseURL}/${url}`, { method, body, headers });

  const data = await response.json();

  if (!response.ok) {
   throw new Error(`${data.error}`);
  }

  return data;
 };

 return { request };
};
