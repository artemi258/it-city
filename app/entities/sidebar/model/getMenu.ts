import { categoryType, IMenu, IMenuWithSubMenu } from '@shared';
import { fetchMenuService, fetchMenuShop, fetchSubMenuShop } from '../api';

export const getMenu = (
 category: categoryType,
): Promise<IMenu[] | IMenuWithSubMenu[] | null> | undefined => {
 if (category === 'product') {
  return fetchMenuShop()
   .then(async (res) => {
    const subMenu = [];
    for (let i = 0; i < res.length; i++) {
     subMenu.push(fetchSubMenuShop(res[i].latin));
    }

    const promisesSecondLevelMenu = await Promise.all(subMenu);
    return res.map((m, i) => ({
     title: m.ru,
     href: `/shop/${m.latin}`,
     subMenu:
      promisesSecondLevelMenu[i] &&
      promisesSecondLevelMenu[i].map((sm) => ({
       title: sm.ru,
       href: `/shop/${m.latin}/${sm.latin}`,
      })),
    }));
   })
   .catch(() => null);
 }
 if (category === 'service') {
  return fetchMenuService()
   .then((menu) =>
    menu.map((item, i) => ({
     title: item.ru,
     href: `/services/${item.latin}`,
    })),
   )
   .catch(() => null);
 }
};
