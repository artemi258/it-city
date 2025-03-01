import { categoryType } from '@shared';
import { ReactNode } from 'react';

export interface IButtonProps {
 title: string;
 href: string;
 catogory: categoryType;
 isOpenSubMenu: boolean;
 handleSubMenuOpen: (num: number) => void;
 children?: ReactNode;
 number: number;
 numberOpenMenu: number | null;
 pathname?: string;
 isMobile: boolean;
}
