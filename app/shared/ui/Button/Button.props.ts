import { Variants } from 'framer-motion';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IButtonProps
 extends Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
 > {
 variants?: Variants;
}
