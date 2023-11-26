import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import '@/public/style/globals.scss';
import { Header, MainPage } from './components';

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
     <MainPage />
     {children}
    </main>
   </body>
  </html>
 );
}
