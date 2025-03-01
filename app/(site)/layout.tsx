import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Suspense } from 'react';
import Script from 'next/script';

import '/public/style/globals.scss';
import StoreProvider from '../providers/StoreProvider';
import { Footer, Header } from '@widgets';
import { YandexMetrika } from '@shared';

const RobotoMono = Roboto_Mono({ subsets: ['cyrillic'], style: ['normal'] });

export const metadata: Metadata = {
 title: 'IT-City - компьютерный центр',
 description:
  'АйТи Сити. Продажа компьютеров, любой офисной техники, расходных материалов и комплектующих по доступным ценам.По адресу: г.Североуральск ул. Мира 4.',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
 const env = process.env.NODE_ENV;
 console.log('env', env);
 return (
  <html lang='ru'>
   <body className={RobotoMono.className}>
    {env !== 'development' && (
     <>
      <Script id='metrika-counter' strategy='afterInteractive'>
       {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
    ym(82125913, "init", {
         clickmap:true,
         trackLinks:true,
         accurateTrackBounce:true,
         webvisor:true
    });`}
      </Script>
      <Suspense fallback={<></>}>
       <YandexMetrika />
      </Suspense>
     </>
    )}
    <StoreProvider>
     <Header />
     <main>{children}</main>
     <Footer />
    </StoreProvider>
   </body>
  </html>
 );
}
