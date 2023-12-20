import { IHtagProps } from './Htag.props';
import { createElement } from 'react';
import cn from 'classnames';

import styles from './Htag.module.scss';

export const Htag = ({ tag, children, classn }: IHtagProps): JSX.Element => {
 return <>{createElement(tag, { className: cn(styles[tag], classn) }, children)}</>;
};
