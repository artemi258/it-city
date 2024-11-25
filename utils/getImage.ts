import { ProductCategory } from '@/src/product/product.interface';
import puppeteer, { Browser } from 'puppeteer';

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

 let browser: Browser;

 const openBrowser = async () => {
  browser = await puppeteer.launch({
   args: ['--disable-gpu', '--no-sandbox'],
   executablePath: '../../../usr/bin/chromium-browser',
  });

  return browser;
 };

 openBrowser();

 const getUrlImage = (product: IProduct): Promise<string> => {
  return new Promise((res, rej) => {
   (async function async() {
    const page = await browser.newPage().catch((err) =>
     rej({
      err: 'page',
      message: `не удалось открыть страницу ${err}`,
     }),
    );
    try {
     if (page) {
      console.log('product', product.name);
      await page.goto('https://www.google.ru/imghp', { waitUntil: 'load' });

      await page.$eval('textarea', (input, localValue) => (input.value = localValue), product.name);

      await new Promise((res) => setTimeout(res, 1000));

      await page.locator('[aria-label="Поиск в Google"]').click();

      await page.waitForNavigation();

      await new Promise((res) => setTimeout(res, 1000));

      const img = await page.$('.dURPMd img');

      const url = await (await img.getProperty('src')).jsonValue();
      await page.close();

      res(url);
     }
    } catch (error) {
     if (page) await page.close();
     rej(error);
    }
   })();
  });
 };

 for (let i = 0; i < products.length; i++) {
  await getUrlImage(products[i])
   .then((image) =>
    images.push({
     image,
     name: products[i].name,
    }),
   )
   .catch(async (err) => {
    if (err.err) {
     console.log(err.message);
     await browser.close();
     await openBrowser();
    }
    console.log(err);
   });
 }
 await browser.close();
 return images;
};
