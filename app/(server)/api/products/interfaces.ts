import { ICategory, IParamsCategory } from '@server/interfaces';

export interface IProducts {
 id: string;
 name: string;
 price: number;
 image: string | null;
 category: ICategory;
 subCategory: ICategory;
}

export interface IParamsSubCategory extends IParamsCategory {
 subCategory: string;
}
