'use client';

import { motion } from 'framer-motion';
import { IButtonProps } from './Button.props';
import cn from 'classnames';

import styles from './Button.module.scss';

export const Button = ({ children, className, ...props }: IButtonProps): JSX.Element => {
 return (
  <motion.button className={cn(styles.button, className)} {...props}>
   {children}
  </motion.button>
 );
};
