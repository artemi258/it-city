import { Dispatch, SetStateAction } from 'react';

export interface IForm {
 name: string;
 phone: string;
 email: string;
 message: string;
 checkbox: boolean;
}

export interface IFormProps {
 isPopupOpen: boolean;
 setPopupOpen: Dispatch<SetStateAction<boolean>>;
}
