import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

// Create Thunk
export const fetchProductApi = createAsyncThunk(
  'product/fetchProducts', 
  async () => {
    const response = await axios.get('http://localhost:3000/product');
    // console.log('***', response.data);
    return response.data;
  }
)

const initialState = {
  apiProducts: [] || null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [fetchProductApi.fulfilled]: (state, action) => {
      state.apiProducts = action.payload;
    },
  },
});

// export const { setApiProducts } = productSlice.actions;
export const selectProduct = (state) => state.product;
export default productSlice.reducer;
