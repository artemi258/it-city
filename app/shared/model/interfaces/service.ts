import { ICategory } from './shop';

interface IService {
 id: string;
 name: string;
 price: string;
}

export interface IServices {
 id: string;
 category: ICategory;
 firstLevelCategory: string | null;
 secondLevelCategory: string | null;
 data?: IService[];
 brands?: Record<string, IService[]>;
}
