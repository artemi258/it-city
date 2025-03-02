import { IHttpHook } from '@shared';

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

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
