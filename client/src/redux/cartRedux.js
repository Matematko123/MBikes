import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      const newArray = state.products.filter((product) => {
        return product._id !== action.payload.product._id;
      });
      console.log(newArray);
      state.products = [...newArray];
      state.total -= action.payload.price;
    },
    clearAllProducts: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearAllProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
