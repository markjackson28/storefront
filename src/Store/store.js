import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});
