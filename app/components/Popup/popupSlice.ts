import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPopup {
 popupActive: boolean;
}

const initialState: IPopup = {
 popupActive: false,
};

const popup = createSlice({
 name: 'popup',
 initialState,
 reducers: {
  changePopupActive: (state, action: PayloadAction<boolean>) => {
   state.popupActive = action.payload;
  },
 },
});

const { reducer, actions } = popup;

export const { changePopupActive } = actions;

export default reducer;
