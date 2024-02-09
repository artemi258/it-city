export interface IProduct {
 image: string;
 descr: string;
 price: string;
 category: string;
}

export interface IProductWithId extends IProduct {
 _id: string;
}
