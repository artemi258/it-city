import { categoryType } from '@shared';
import { Dispatch, RefObject, SetStateAction } from 'react';

export interface ISidebarMenuListProps {
 isOpenSubMenu: boolean;
 handleSubMenuOpen: (num: number) => void;
 categories: string | string[];
 inlineStyles: Record<string, string | number | undefined> | undefined;
 handleRef?: (node: HTMLUListElement | null) => void;
 numberOpenMenu: number | null;
 setNumberOpenMenu: Dispatch<SetStateAction<number | null>>;
 setIsOpenSubMenu: Dispatch<SetStateAction<boolean>>;
 category: categoryType;
 pathname: string;
 isMobile: boolean;
}
