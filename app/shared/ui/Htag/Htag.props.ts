import { ReactNode } from 'react';

type tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IHtagProps {
 tag: tag;
 children: ReactNode;
 classn?: string;
}
