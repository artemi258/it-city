import { API, IMainMenu } from '@shared';

export const getMenu = (): Promise<IMainMenu[] | null> => {
 return API.service
  .getMenuService()
  .then((menu) => {
   return [
    { title: 'главная', active: '/', href: '/' },
    {
     title: 'услуги',
     active: 'services',
     href: `/services/${menu !== null ? menu[0].latin : ''}`,
    },
    {
     title: 'магазин',
     active: 'shop',
     href: '/shop',
    },
   ];
  })
  .catch(() => null);
};
