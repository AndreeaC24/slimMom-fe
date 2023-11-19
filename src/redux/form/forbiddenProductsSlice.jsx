
import { createSlice } from '@reduxjs/toolkit';
import {fetchForbiddenProducts } from './operationsForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const forbiddenProductsSlice = createSlice({
    name: 'forbiddenProducts',
    initialState: {
      forbiddenProducts: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchForbiddenProducts.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchForbiddenProducts.fulfilled, (state, action) => {
          console.log('Fulfilled action:', action);
          state.isLoading = false;
          state.forbiddenProducts = action.payload.forbiddenProducts;
        })
        .addCase(fetchForbiddenProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error(
            `${action.payload}` === 'Network Error' ? `${action.payload}` : 'Something went wrong. Check your data and try again');
              });
        
    },
  });

  export const selectForbiddenProducts = (state) => (state.forbiddenProducts?.forbiddenProducts || []); 

  export const forbiddenProductsReducer =  forbiddenProductsSlice.reducer;