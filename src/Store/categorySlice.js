import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

// Categories
let gamingHeadsets = {
  _id: uuid,
  name: 'headset',
  description: 'Gaming headsets'
}
let gamingKeyboards = {
  _id: uuid,
  name: 'keyboard',
  description: 'Gaming keyboard'
}
let gamingMice = {
  _id: uuid,
  name: 'mouse',
  description: 'Gaming mouse'
}

const initialState = {
  categories: [gamingMice, gamingKeyboards, gamingHeadsets]
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.categories = [...state.categories, action.payload]
    }
  },
});

export const { setCategoryList } = categorySlice.actions;
export const selectCategory = (state) => state.category;
export default categorySlice.reducer;
