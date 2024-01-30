export interface IProduct {
 image: string;
 category: string;
 title: string;
 description: string;
 price: string;
}

export interface IProductWithId extends IProduct {
 _id: string;
}
