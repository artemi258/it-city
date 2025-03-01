import { API, IMenuFetch } from '@shared';

export const fetchMenuService = (): Promise<IMenuFetch[]> => API.service.getMenuService();

export const fetchMenuShop = (): Promise<IMenuFetch[]> => API.product.getMenuShop();

export const fetchSubMenuShop = (category: string): Promise<IMenuFetch[]> =>
 API.product.getSubMenuShop(category);
