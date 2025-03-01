import { IButtonProps } from './Button.props';
import cn from 'classnames';

import styles from './styles/Button.module.scss';

export const Button = ({ children, className, ...props }: IButtonProps): JSX.Element => {
 return (
  <button className={cn(styles.button, className)} {...props}>
   {children}
  </button>
 );
};
