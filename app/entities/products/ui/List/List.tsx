import Image from 'next/image';
import cn from 'classnames';
import plug from './plug.jpg';
import { IListProps } from './List.props';

import styles from './styles/list.module.scss';

export const List = ({ id, name, price, image, isStock }: IListProps): JSX.Element => {
 return (
  <li className={styles.list} key={id}>
   {!isStock && <span className={styles.noStock}>нет в наличии</span>}
   <div className={cn(styles.img, { [styles.filter]: !isStock })}>
    <Image fill src={image ? image : plug} alt={name} />
   </div>
   <div className={cn(styles.wrapper, { [styles.filter]: !isStock })}>
    <p className={styles.descr}>{name}</p>
    <div className={styles.price}>{price}₽</div>
   </div>
  </li>
 );
};
