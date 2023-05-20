import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  discountedTotal: 0,
  totalProducts: 0,
  totalQuantity: 0,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { discountPercentage, price } = action.payload;
      state.totalQuantity++;
      state.total = state.total + price;
      state.discountedTotal += parseFloat(discountPercentage);
      //   state.discountedTotal = FixedTwo
      const isExists = state.products.some(
        (cart) => cart.id === action.payload.id
      );
      if (!isExists) {
        state.totalProducts++;
        state.products.push(action.payload);
      }
    },
    clearCart: (state, action) => {
      state = {
        total: 0,
        discountedTotal: 0,
        totalProducts: 0,
        totalQuantity: 0,
        products: [],
      };
    },
    removeCart: (state, action) => {
      const { discountPercentage, price } = action.payload;
      state.products = state.products.filter(
        (cart) => cart.id !== action.payload.id
      );
      state.totalQuantity--;
      state.totalProducts--;
      state.total = state.total - price;
      state.discountedTotal = state.discountedTotal - discountPercentage;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, clearCart, removeCart } = cartSlice.actions;
