import { createAsyncThunk, createSlice } from '@reduxjs/toolkit/react';
import { API } from '@/api/requests';
import { IProductWithId } from '@/interfaces/product.interface';

export const fetchProductsBySubCategory = createAsyncThunk(
 'products/fetchProductsBySubCategoryStatus',
 async (subCategory: string) => {
  return await API.product.getProductsBySubCategory(subCategory);
 },
);

export const fetchgetProductsByCategory = createAsyncThunk(
 'products/fetchProductsByCategoryStatus',
 async (category: string) => {
  return await API.product.getProductsByCategory(category);
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
  builder
   .addCase(fetchProductsBySubCategory.pending, (state) => {
    state.loading = true;
   })
   .addCase(fetchProductsBySubCategory.fulfilled, (state, action) => {
    state.loading = false;
    state.products = action.payload;
   })
   .addCase(fetchProductsBySubCategory.rejected, (state, action) => {
    state.error = action.payload as string;
   })
   .addCase(fetchgetProductsByCategory.pending, (state) => {
    state.loading = true;
   })
   .addCase(fetchgetProductsByCategory.fulfilled, (state, action) => {
    state.loading = false;
    state.products = action.payload;
   })
   .addCase(fetchgetProductsByCategory.rejected, (state, action) => {
    state.error = action.payload as string;
   });
 },
});

const { reducer, actions } = ProductsSlice;

// export const { changePopupActive } = actions;

export default reducer;
