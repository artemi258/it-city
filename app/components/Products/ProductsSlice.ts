import { createAsyncThunk, createSlice } from '@reduxjs/toolkit/react';
import { API } from '@/api/requests';
import { IProductWithId } from '@/interfaces/product.interface';

export const fetchProducts = createAsyncThunk(
 'products/fetchProductsStatus',
 async (subCategory: string) => {
  return await API.product.getProducts(subCategory);
 },
);

export interface IProductsState {
 products: IProductWithId[];
 loading: boolean;
 error: string;
}

const initialState: IProductsState = {
 products: [],
 loading: false,
 error: '',
};

const ProductsSlice = createSlice({
 name: 'products',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(fetchProducts.pending, (state) => {
   state.loading = true;
  });
  builder.addCase(fetchProducts.fulfilled, (state, action) => {
   state.loading = false;
   state.products = action.payload;
  });
  builder.addCase(fetchProducts.rejected, (state, action) => {
   state.error = action.payload as string;
  });
 },
});

const { reducer, actions } = ProductsSlice;

// export const { changePopupActive } = actions;

export default reducer;
