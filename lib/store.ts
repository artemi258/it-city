import { Store, ThunkDispatch, UnknownAction, configureStore } from '@reduxjs/toolkit';
import popup from '@/app/(site)/componentsPages/Form/formSlice';

export const makeStore = (): {
 dispatch: ThunkDispatch<any, undefined, UnknownAction>;
} & Store<any, UnknownAction, unknown> => {
 return configureStore({
  reducer: { popup },
 });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
