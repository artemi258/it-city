import puppeteer from 'puppeteer';

export const getImage = async (value: string): Promise<string> => {
 console.log('value', value);
 const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
 try {
  const page = await browser.newPage();
  await page
   .goto('https://www.google.ru/imghp', { waitUntil: 'load' })
   .catch((err) => console.log('goto', err));

  await page.$eval('textarea', (input, localValue) => (input.value = localValue), value);

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
  throw new Error(error);
 }
};
