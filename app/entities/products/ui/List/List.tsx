import Image from 'next/image';

import plug from './plug.jpg';

import styles from './styles/list.module.scss';
import { IListProps } from './List.props';

export const List = ({ id, name, price, image }: IListProps): JSX.Element => {
 return (
  <li className={styles.list} key={id}>
   <div className={styles.img}>
    <Image fill src={image ? image : plug} alt={name} />
   </div>
   <div className={styles.wrapper}>
    <p className={styles.descr}>{name}</p>
    <div className={styles.price}>{price}₽</div>
   </div>
  </li>
 );
};
