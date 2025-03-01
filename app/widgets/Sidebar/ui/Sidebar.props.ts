import { categoryType } from '@shared';

export interface ISidebarProps {
 category: categoryType;
 pathname: string;
}
export interface ISidebarMobileProps extends ISidebarProps {
 isOpenMobileMenu: boolean;
 handleCloseMenu: () => void;
}
