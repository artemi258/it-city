'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../shared/lib/store/store';
import { AppStore } from '../shared/model/interfaces/reduxType';

export default function StoreProvider({ children }: { children: React.ReactNode }): JSX.Element {
 const storeRef = useRef<AppStore>();
 if (!storeRef.current) {
  storeRef.current = makeStore();
 }

 return <Provider store={storeRef.current}>{children}</Provider>;
}
