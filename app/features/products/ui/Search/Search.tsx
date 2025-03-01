'use client';

import { useAppDispatch, useDebounce, Input, Button } from '@shared';
import { useSearchParams, useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';

import styles from './styles/search.module.scss';

export const Search = (): JSX.Element => {
 const searchParams = useSearchParams();
 const params = new URLSearchParams(searchParams);
 const { category } = useParams();
 const dispatch = useAppDispatch();
 const [value, setValue] = useState<string>(params.get('search') ?? '');
 const { replace } = useRouter();
 const pathname = usePathname();
 const debouncedValue = useDebounce(value);

 useEffect(() => {
  if (debouncedValue) {
   params.set('search', debouncedValue);
   replace(`${pathname}?${params.toString()}`);
  } else {
   replace(`${pathname}`);
  }
 }, [debouncedValue]);

 const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
  setValue(e.target.value);
 };

 const onClick = (): void => {
  setValue('');
 };

 return (
  <div className={styles.wrapper}>
   <Input value={value} onChange={handleSearch} placeholder='поиск' className={styles.search} />
   {value && (
    <Button onClick={onClick} className={styles.clear}>
     ×
    </Button>
   )}
  </div>
 );
};
