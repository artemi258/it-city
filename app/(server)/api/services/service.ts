import { readFile, writeFile } from 'fs/promises';
import { IServices } from './interfaces';

export const createServices = async (services: any): Promise<void> => {
 return await writeFile(`${process.cwd()}/bd/services.json`, JSON.stringify(services));
};

export const getAllService = async (): Promise<string> => {
 return await readFile(`${process.cwd()}/bd/services.json`, 'utf8');
};
