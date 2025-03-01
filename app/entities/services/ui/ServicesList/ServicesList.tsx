import { useEffect, useState } from 'react';

import styles from './styles/servicesList.module.scss';
import { getServices } from '../../model';
import { List } from '../List/List';
import { Htag, IServices, SkeletonServices } from '@shared';

export const ServicesList = ({ category }: { category: string }): JSX.Element => {
 const [services, setServices] = useState<IServices[] | null>([]);

 useEffect(() => {
  getServices(category as string)
   .then((s) => setServices(s))
   .catch(() => setServices(null));
 }, []);

 return (
  <>
   {!services && <div className={styles.error}>не удалось получить меню&#128532;</div>}
   {services && services.length < 1 && <SkeletonServices />}
   {!!services?.length &&
    services.map(({ id, firstLevelCategory, secondLevelCategory, brands, data }, i) => {
     return (
      <div key={id}>
       {firstLevelCategory && (
        <Htag classn={styles.title} tag='h3'>
         {firstLevelCategory}
        </Htag>
       )}
       {secondLevelCategory && (
        <Htag classn={styles.title} tag='h4'>
         {secondLevelCategory}
        </Htag>
       )}
       {data && data.map(({ id, name, price }) => <List name={name} price={price} key={id} />)}
       {brands &&
        Object.keys(brands).map((b) => {
         return (
          <div key={b}>
           <Htag classn={styles.title} tag='h5'>
            {b}
           </Htag>
           <ul>
            {brands[b].map(({ id, name, price }) => (
             <List name={name} price={price} key={id} />
            ))}
           </ul>
          </div>
         );
        })}
      </div>
     );
    })}
  </>
 );
};
