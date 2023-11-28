import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.scss';
import { IInputProps } from './Input.props';
import cn from 'classnames';

export const Input = forwardRef(
 (
  { className, error, ...props }: IInputProps,
  ref: ForwardedRef<HTMLInputElement>,
 ): JSX.Element => {
  return (
   <div className={cn(className, styles.inputWrapper)}>
    <input
     className={cn(styles.input, {
      [styles.error]: error,
     })}
     ref={ref}
     {...props}
    />
    {error && <span className={styles.errorMessage}>{error.message}</span>}
   </div>
  );
 },
);
