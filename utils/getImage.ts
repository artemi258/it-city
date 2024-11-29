import { ProductCategory } from '@/src/product/product.interface';
import puppeteer from 'puppeteer';

interface IProduct {
 name: any;
 price: any;
 category: ProductCategory;
 subCategory: ProductCategory;
}

interface IImages {
 image: string;
 name: string;
}

export const getImage = async (products: IProduct[]): Promise<IImages[]> => {
 const images = [];

 const getUrlImage = async (product: IProduct): Promise<string> => {
  const browser = await puppeteer.launch({
   headless: 'shell',
   args: ['--disable-gpu', '--no-sandbox'],
   executablePath: '../../../usr/bin/chromium-browser',
  });
  // const browser = await puppeteer.launch({
  //  headless: false,
  //  args: ['--disable-gpu', '--no-sandbox'],
  //  //  executablePath: '../../../usr/bin/chromium-browser',
  // });

  try {
   const page = await browser.newPage();
   console.log('product', product.name);
   await page.goto('https://www.google.ru/imghp', { waitUntil: 'load' });

   await page.$eval('textarea', (input, localValue) => (input.value = localValue), product.name);

   await new Promise((res) => setTimeout(res, 1000));

   await page.locator('[aria-label="Поиск в Google"]').click();

   await page.waitForNavigation();

   await new Promise((res) => setTimeout(res, 1000));

   const img = await page.$('.dURPMd img');

   const url = await (await img.getProperty('src')).jsonValue();
   await browser.close();

   return url;
  } catch (error) {
   await browser.close();
  }
 };

 for (let i = 0; i < products.length; i++) {
  await getUrlImage(products[i])
   .then((image) =>
    images.push({
     image,
     name: products[i].name,
    }),
   )
   .catch((err) => {
    console.log(err);
   });
 }
 return images;
};
