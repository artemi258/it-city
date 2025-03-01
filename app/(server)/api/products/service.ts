import { readFile, writeFile } from 'fs/promises';
import { IProducts } from './interfaces';

export const createProducts = async (products: IProducts[]): Promise<void> => {
 return await writeFile(`${process.cwd()}/bd/products.json`, JSON.stringify(products));
};

export const getAllProducts = async (): Promise<string> => {
 return await readFile(`${process.cwd()}/bd/products.json`, 'utf8');
};
