import { IHttpHook, IMenuFetch } from '@shared';

export const service = (cb: IHttpHook['request']) => ({
 getMenuService: (): Promise<IMenuFetch[]> => cb(`services/menu`),

 getServicesByCategory: (category: string) => cb(`services/${category}`),
});
