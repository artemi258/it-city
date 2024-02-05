export interface IProduct {
 image: string;
 descr: string;
 price: string;
}

export interface IProductWithId extends IProduct {
 _id: string;
}
