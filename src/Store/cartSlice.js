import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  cartIconCounter: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      // console.log('action', action)
      state.cart.push(action.payload.name);
      state.cartIconCounter += 1;
    }
  },
});

export const { setCart } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
