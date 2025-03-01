import { Dispatch, SetStateAction } from 'react';

export interface IBurgerButtonProps {
 setIsOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
 isOpenMobileMenu: boolean;
}
