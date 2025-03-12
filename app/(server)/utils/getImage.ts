import { IProducts } from '@server/api/products/interfaces';
import puppeteer from 'puppeteer';
import { KnownDevices } from 'puppeteer';

interface IImages {
 image: string | null;
 name: string;
}

const Pixel = KnownDevices['Pixel 5 landscape'];

export const getImage = async (products: IProducts[]): Promise<IImages[]> => {
 const env = process.env.NODE_ENV;

 const images: { image: string | null; name: string }[] = [];

 const options =
  env === 'production'
   ? {
      headless: 'shell' as const,
      args: ['--disable-gpu', '--no-sandbox'],
      executablePath: '../../../usr/bin/google-chrome',
     }
   : { headless: false };
 const getUrlImage = async (product: IProducts): Promise<string> => {
  const browser = await puppeteer.launch(options);
  try {
   const page = await browser.newPage();
   await page.emulate(Pixel).catch(() => console.log('PIXEl'));
   console.log('product', product.name);
   await page.goto('https://www.google.ru/imghp', { waitUntil: 'load' });

   await page
    .$eval(
     'textarea',
     (input, localValue) => {
      input.focus();
      input.value = localValue;
     },
     product.name,
    )
    .catch(() => console.log('TEXT'));

   await new Promise((res) => setTimeout(res, 1000));
   await page.keyboard.press('Enter');

   await page.waitForNavigation();

   await new Promise((res) => setTimeout(res, 10000));

   const img = await page.$('#rso img');
   await new Promise((res) => setTimeout(res, 1000));

   if (!img) throw new Error('не найдена картинка');

   const url = img && (await (await img.getProperty('src')).jsonValue());
   await browser.close();
   console.log(url, url);
   return url;
  } catch (error) {
   if (error instanceof Error) {
    console.log('ERROR', error);
   }
   await browser.close();
   throw error;
  }
 };

 for (let i = 0; i < products.length; i++) {
  // images.push({
  //  image: null,
  //  name: products[i].name,
  // });
  if (!products[i].image) {
   await getUrlImage(products[i])
    .then((image) =>
     images.push({
      image,
      name: products[i].name,
     }),
    )
    .catch((err) => {
     console.log('err', err);
    });
  } else {
   images.push({
    image: products[i].image as string,
    name: products[i].name,
   });
  }
 }
 return images;
};
