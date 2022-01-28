import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

// Products
let headsetProducts = { 
  products: [
    {
      _id: uuid(),
      name: 'Steel Series',
      description: 'Best for casual gaming',
      stock: 10,
      price: '$99.99'
    },
    {
      _id: uuid(),
      name: 'Logitec',
      description: 'Best for FPS',
      stock: 13,
      price: '$150.00'
    }
  ]
}
let keyboardProducts = { 
  products: [
    {
      _id: uuid(),
      name: 'Steel Series',
      description: 'Best for casual gaming',
      stock: 14,
      price: '$150.99'
    },
    {
      _id: uuid(),
      name: 'Ducky one two mini',
      description: 'Best for smaller mouse pads',
      stock: 6,
      price: '$200.00'
    }
  ]
}
let miceProducts = { 
  products: [
    {
      _id: uuid(),
      name: 'Finalmouse',
      description: 'The lightest mouse you can get',
      stock: 2,
      price: '$99.99'
    },
    {
      _id: uuid(),
      name: 'Logitec',
      description: 'Best for FPS',
      stock: 4,
      price: '$111.00'
    }
  ]
}

// Categories
let gamingHeadsets = {
  name: 'Headset',
  description: 'Gaming headsets',
  productList: headsetProducts
}
let gamingKeyboards = {
  name: 'Keyboard',
  description: 'Gaming keyboard',
  productList: keyboardProducts
}
let gamingMice = {
  name: 'Mouse',
  description: 'Gaming mouse',
  productList: miceProducts
}

const initialState = {
  categories: [gamingMice, gamingKeyboards, gamingHeadsets],
  activeCategory: [] || null,
  activeProduct: [] || null,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setProduct: (state, action) => {
      console.log('action', action)
      state.activeProduct = action.payload;
    }
  },
});

export const { setCategory, setProduct } = categorySlice.actions;
export const selectCategory = (state) => state.category;
export default categorySlice.reducer;
