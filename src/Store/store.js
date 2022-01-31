import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../Store/categorySlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});
