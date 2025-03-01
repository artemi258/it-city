// import '@/public/style/globals.scss';

export const metadata = {
 title: 'Политика конфиденциальности',
 description: 'Политика конфиденциальности',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
 return (
  <html lang='ru'>
   <body className='container'>{children}</body>
  </html>
 );
}
