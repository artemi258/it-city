import { products } from '@entities/products/model';
import { popup } from '@features/popup';
import { Store, ThunkDispatch, UnknownAction, configureStore } from '@reduxjs/toolkit';

export const makeStore = (): {
 dispatch: ThunkDispatch<any, undefined, UnknownAction>;
} & Store<any, UnknownAction, unknown> => {
 return configureStore({
  reducer: { popup, products },
 });
};
