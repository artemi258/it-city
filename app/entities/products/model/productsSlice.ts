import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit/react';
import { API, IProductWithId } from '@shared';

export const getProducts = createAsyncThunk(
 'products/fetchProductsStatus',
 ({ offset, search }: { offset: number; search: string | null }) => {
  return API.product.getProducts({ offset, search });
 },
);

export const getProductsBySubCategory = createAsyncThunk(
 'products/fetchProductsBySubCategoryStatus',
 ({
  category,
  subCategory,
  offset,
  search,
 }: {
  category: string;
  subCategory: string;
  offset: number;
  search: string | null;
 }) => {
  return API.product.getProductsBySubCategory({ category, subCategory, offset, search });
 },
);

export const getProductsByCategory = createAsyncThunk(
 'products/fetchProductsByCategoryStatus',
 ({ category, offset, search }: { category: string; offset: number; search: string | null }) => {
  return API.product.getProductsByCategory({ category, offset, search });
 },
);

export const getProductsBySearch = createAsyncThunk(
 'products/fetchProductsBySearchStatus',
 ({ value, category, offset }: { value: string; category: string; offset: number }) => {
  return API.product.searchProduct({ category, value, offset });
 },
);

export interface IProductsState {
 products: IProductWithId[];
 loading: boolean;
 error: string;
 last: boolean;
}

const initialState: IProductsState = {
 products: [],
 loading: false,
 error: '',
 last: true,
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
   .addCase(getProducts.pending, (state) => {
    state.loading = true;
    state.error = '';
   })
   .addCase(getProducts.fulfilled, (state, action) => {
    state.loading = false;
    state.products = [...state.products, ...action.payload.products];
    state.last = action.payload.last;
   })
   .addCase(getProducts.rejected, (state, action) => {
    state.loading = false;
    state.error = `${action.error.message}`;
    state.last = true;
   })
   .addCase(getProductsBySubCategory.pending, (state) => {
    state.loading = true;
    state.error = '';
   })
   .addCase(getProductsBySubCategory.fulfilled, (state, action) => {
    state.loading = false;
    state.products = [...state.products, ...action.payload.products];
    state.last = action.payload.last;
   })
   .addCase(getProductsBySubCategory.rejected, (state, action) => {
    state.loading = false;
    state.error = `${action.error.message}`;
    state.last = true;
   })
   .addCase(getProductsByCategory.pending, (state) => {
    state.loading = true;
    state.error = '';
   })
   .addCase(getProductsByCategory.fulfilled, (state, action) => {
    console.log(action);
    state.loading = false;
    state.products = [...state.products, ...action.payload.products];
    state.last = action.payload.last;
   })
   .addCase(getProductsByCategory.rejected, (state, action) => {
    state.loading = false;
    state.error = `${action.error.message}`;
    state.last = true;
   });
 },
});

const { reducer: products, actions } = ProductsSlice;

export const { addProducts, clearProducts } = actions;

export { products };
