import { ReactNode } from 'react';

type tag = 'h1' | 'h2' | 'h3';

export interface IHtagProps {
 tag: tag;
 children: ReactNode;
 classn: string;
}
