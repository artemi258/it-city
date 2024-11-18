import puppeteer from 'puppeteer';

export const getImage = async (value: string): Promise<string> => {
 console.log('value', value);
 const browser = await puppeteer.launch({ headless: false });
 const page = await browser.newPage();
 await page.goto('https://www.google.ru/imghp', { waitUntil: 'load' });

 await page.$eval('textarea', (input, localValue) => (input.value = localValue), value);

 await page.locator('[aria-label="Поиск в Google"]').click();

 await page.waitForNavigation();

 const img = await page.$('.dURPMd img');

 const url = await (await img.getProperty('src')).jsonValue();

 console.log(url);
 await browser.close();
 return url;
};
