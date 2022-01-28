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

const intitialState = {
  // categories: [gamingHeadsets, gamingKeyboards, gamingMice]
  categories: [],
}

console.log('state', intitialState);

export const categorySlice = createSlice({
  name: 'categories',
  intitialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.categories.push('Push Added')
    }
  },
});

export const { setCategoryList } = categorySlice.actions;
export const selectCategory = (state) => state.categories;
export default categorySlice.reducer;
