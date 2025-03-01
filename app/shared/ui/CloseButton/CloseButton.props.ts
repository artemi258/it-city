import { MouseEvent } from 'react';

export interface ICloseButtonProps {
 cb: (e: MouseEvent<HTMLElement>) => void;
 classn: string;
}
