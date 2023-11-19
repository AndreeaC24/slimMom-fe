import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
  };
const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
      setLoading: (state) => {
        state.isLoading = true;
      },
      setNoLoading: (state) => {
        state.isLoading = false;
      },
    },
  });
  

export const { setLoading, setNoLoading } = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;