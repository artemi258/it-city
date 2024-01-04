import { ReactNode } from 'react';

export interface IProductsAdminPanelProps {
 children: ReactNode;
}

export interface IProduct {
 _id: string;
 title: string;
 description: string;
 price: string;
 image: string;
}
