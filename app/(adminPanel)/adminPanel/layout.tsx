'use client';

import { Menu } from '@/app/components';
import { useState } from 'react';
import { FormAuth } from '@/app/(adminPanel)/componentsAdminPanel';

export default function AdminPanelLayout({ children }: { children: React.ReactNode }): JSX.Element {
 const [auth, setAuth] = useState<boolean>(false);

 return (
  <main className='container'>
   <Menu type='adminPanel' />
   {children}
   {auth ? <Menu type='adminPanel' /> : null}
   {auth ? children : <FormAuth cb={setAuth} />}
  </main>
 );
}
