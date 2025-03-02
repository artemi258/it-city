import { product, service } from '.';
import { IAuth, IProductWithId, useHttp } from '@shared';
import { IPopup } from '@features/popup';

const { request } = useHttp();

export const API = {
 product: product(request),
 service: service(request),
 mail: {
  question: (data: IPopup): Promise<void> => request(`mail`, 'POST', JSON.stringify(data)),
 },
 auth: (data: IAuth): Promise<{ auth: boolean }> => request('auth', 'POST', JSON.stringify(data)),
 adminPanel: {
  createProducts: (data: FormData): Promise<IProductWithId> =>
   request(`products`, 'POST', data, {}),
  addImages: (images: FormData): Promise<IProductWithId> =>
   request(`product/images`, 'POST', images, {}),
  createService: (data: FormData): Promise<IProductWithId> => request(`services`, 'POST', data, {}),
 },
};
