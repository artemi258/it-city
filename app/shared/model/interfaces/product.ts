export interface IProduct {
 name: string;
 price: string;
 image: string;
 isStock: boolean;
}

export interface IProductWithId extends IProduct {
 id: string;
}
