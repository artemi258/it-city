import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit/react';
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

export const getProductsBySearch = createAsyncThunk(
 'products/fetchProductsBySearchStatus',
 async ({ value, category }: { value: string; category: string }) => {
  return await API.product.searchProduct({ category, value });
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
  addProducts: (state, action: PayloadAction<IProductWithId[]>) => {
   state.products = action.payload;
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
   })
   .addCase(getProductsBySearch.pending, (state) => {
    state.loading = true;
   })
   .addCase(getProductsBySearch.fulfilled, (state, action) => {
    state.loading = false;
    state.products = action.payload;
   })
   .addCase(getProductsBySearch.rejected, (state, action) => {
    state.error = action.payload as string;
   });
 },
});

const { reducer, actions } = ProductsSlice;

export const { addProducts, clearProducts } = actions;

export default reducer;
