import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Content, Form, Header, MainPage } from './componentsPages';

import '@/public/style/globals.scss';
import StoreProvider from './StoreProvider';

const RobotoMono = Roboto_Mono({ subsets: ['cyrillic'], style: ['normal'] });

export const metadata: Metadata = {
 title: 'IT-City - компьютерный центр',
 description:
  'АйТи Сити. Продажа компьютеров, любой офисной техники, расходных материалов и комплектующих по доступным ценам.По адресу: г.Североуральск ул. Мира 4.',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
 return (
  <html lang='ru'>
   <body className={RobotoMono.className}>
    <Header />
    <main>
     <StoreProvider>
      <MainPage />
      <Content>{children}</Content>
      <Form />
     </StoreProvider>
    </main>
   </body>
  </html>
 );
}
