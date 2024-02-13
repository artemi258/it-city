'use client';

import { useParams } from 'next/navigation';
import { Input } from '..';
import { ISearchProps } from './Search.props';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/store.hook';
import {
 clearProducts,
 getProductsByCategory,
 getProductsBySearch,
} from '../Products/ProductsSlice';
import { useDebounce } from '@/hooks/useDebounce';

import styles from './Search.module.scss';

export const Search = (props: ISearchProps): JSX.Element => {
 const [value, setValue] = useState<string>('');
 const [firstRender, setFirstRender] = useState(false);
 const dispatch = useAppDispatch();
 const { category } = useParams();
 const debouncedValue = useDebounce(value);

 useEffect(() => {
  setFirstRender(true);
 }, []);

 useEffect(() => {
  if (debouncedValue) {
   dispatch(getProductsBySearch({ category: category as string, value: debouncedValue }));
  } else if (firstRender) {
   dispatch(clearProducts());
   dispatch(getProductsByCategory({ category: category as string, offset: 0 }));
  }
 }, [debouncedValue]);

 const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
  setValue(e.target.value);
 };

 return (
  <Input value={value} onChange={handleSearch} placeholder='поиск' className={styles.search} />
 );
};
