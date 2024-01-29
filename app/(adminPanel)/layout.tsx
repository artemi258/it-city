import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Menu } from '@/app/components';

import '@/public/style/globals.scss';

const RobotoMono = Roboto_Mono({ subsets: ['cyrillic'], style: ['normal'] });

export const metadata: Metadata = {
 title: 'Админ панель',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
 return (
  <html lang='ru'>
   <body className={RobotoMono.className}>{children}</body>
  </html>
 );
}
