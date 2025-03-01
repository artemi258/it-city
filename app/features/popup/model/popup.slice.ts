import { createSlice } from '@reduxjs/toolkit';
import { IPopupSlice } from './popup.interfaces';

const initialState: IPopupSlice = {
 isActivePopup: false,
};

const popupSlice = createSlice({
 name: 'popup',
 initialState,
 reducers: {
  togglePopup: (state) => {
   state.isActivePopup = !state.isActivePopup;
  },
 },
});

const { reducer: popup, actions } = popupSlice;

export const { togglePopup } = actions;

export { popup };
