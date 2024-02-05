import { IHttpHook } from '@/interfaces/httpHook.interface';

export const useHttp = (): IHttpHook => {
 const request = async (
  url: string,
  method: string = 'GET',
  body: BodyInit | null | undefined = null,
  headers = { 'Content-Type': 'application/json' },
 ): Promise<any> => {
  try {
   const response = await fetch(url, { method, body, headers });

   if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
   }

   const data = await response.json();

   return data;
  } catch (e) {
   throw new Error(e as string);
  }
 };

 return { request };
};
