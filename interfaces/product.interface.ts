export interface IProduct {
 name: string;
 price: string;
 image: string;
}

export interface IProductWithId extends IProduct {
 _id: string;
}
