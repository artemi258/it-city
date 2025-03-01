import cn from 'classnames';

import styles from './styles/list.module.scss';
import { IListProps } from './List.props';

export const List = ({ name, price, classn }: IListProps): JSX.Element => {
 return (
  <li className={cn(styles.list, { [styles.border__bottom]: classn })}>
   <span className={styles.text}>{name}</span>
   <span className={styles.price}>{price} руб.</span>
  </li>
 );
};
