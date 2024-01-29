import { Dispatch, SetStateAction } from 'react';

export interface IAuthorization {
 login: string;
 pass: string;
}

export interface IFormAuthProps {
 cb: Dispatch<SetStateAction<boolean>>;
}
