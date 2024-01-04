export class CreateProductDto {
 category: string;
 title: string;
 description: string;
 price: string;
 image: File;
}

export interface ICreateProductService {
 category: string;
 title: string;
 description: string;
 price: string;
 image: string;
}
