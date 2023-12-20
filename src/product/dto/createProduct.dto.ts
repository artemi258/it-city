export class CreateProductDto {
 category: string;
 title: string;
 description: number;
 price: string;
 image: File;
}

export interface IcreateProductService {
 category: string;
 title: string;
 description: number;
 price: string;
 image: string;
}
