import { API, IServices } from '@shared';

export const getServices = (category: string): Promise<IServices[] | null> => {
 return API.service
  .getServicesByCategory(category)
  .then((res) => res)
  .catch(() => null);
};
