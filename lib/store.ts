import { Store, ThunkDispatch, UnknownAction, configureStore } from '@reduxjs/toolkit';
import popup from '@/app/components/popup/popupSlice';
import products from '@/app/components/Products/ProductsSlice';

export const makeStore = (): {
 dispatch: ThunkDispatch<any, undefined, UnknownAction>;
} & Store<any, UnknownAction, unknown> => {
 return configureStore({
  reducer: { popup, products },
 });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
