import { GetProducts } from '../../../api/requests';
import { Htag } from '../../../components/Htag/Htag';
import styles from './ProductsAdminPanel.module.scss';
import Image from 'next/image';

export default async function ProductsItem() {
 const items = await GetProducts();
 return (
  <>
   {items.map((item) => {
    const descr =
     item.description.length > 75 ? `${item.description.slice(0, 75)}...` : item.description;
    return (
     <li className={styles.cart} key={item._id}>
      <div className={styles.img}>
       <Image fill src={`data:image/png;base64, ${item.image}`} alt={item.title} />
      </div>
      <div className={styles.wrapper}>
       <Htag classn={styles.title} tag='h3'>
        {item.title}
       </Htag>
       <p className={styles.descr}>{descr}</p>
       <div className={styles.price}>{item.price}₽</div>
      </div>
     </li>
    );
   })}
  </>
 );
}
