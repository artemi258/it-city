import { Dispatch, SetStateAction } from 'react';

export interface IForm {
 image: File;
 category: string;
 title: string;
 description: string;
 price: string;
}

export interface IFormProps {
 isPopupOpen: boolean;
 setPopupOpen: Dispatch<SetStateAction<boolean>>;
}
