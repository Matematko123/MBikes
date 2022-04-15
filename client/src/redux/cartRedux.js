import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
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
      state.products.splice(
        state.products.findIndex(
          (item) => item._id === action.payload.product._id
        ),
        1
      );
      state.quantity -= 1;

      state.total -= action.payload.product.price;
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
