import { createAsyncThunk, createSlice } from '@reduxjs/toolkit/react';
import { API } from '@/api/requests';
import { IProductWithId } from '@/interfaces/product.interface';

export const getProductsBySubCategory = createAsyncThunk(
 'products/fetchProductsBySubCategoryStatus',
 async ({ subCategory, offset }: { subCategory: string; offset: number }) => {
  return await API.product.getProductsBySubCategory({ subCategory, offset });
 },
);

export const getProductsByCategory = createAsyncThunk(
 'products/fetchProductsByCategoryStatus',
 async ({ category, offset }: { category: string; offset: number }) => {
  return await API.product.getProductsByCategory({ category, offset });
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
 reducers: {
  clearProducts: (state) => {
   state.products = [];
  },
 },
 extraReducers: (builder) => {
  builder
   .addCase(getProductsBySubCategory.pending, (state) => {
    state.loading = true;
   })
   .addCase(getProductsBySubCategory.fulfilled, (state, action) => {
    state.loading = false;
    state.products = [...state.products, ...action.payload];
   })
   .addCase(getProductsBySubCategory.rejected, (state, action) => {
    state.error = action.payload as string;
   })
   .addCase(getProductsByCategory.pending, (state) => {
    state.loading = true;
   })
   .addCase(getProductsByCategory.fulfilled, (state, action) => {
    state.loading = false;
    state.products = [...state.products, ...action.payload];
   })
   .addCase(getProductsByCategory.rejected, (state, action) => {
    state.error = action.payload as string;
   });
 },
});

const { reducer, actions } = ProductsSlice;

export const { clearProducts } = actions;

export default reducer;
