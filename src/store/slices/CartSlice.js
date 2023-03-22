import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  productsShow: null,
  cartsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.carts = [...state.carts, action.payload];
      state.cartsCount = state.carts.length;
    },
    showProductDetails: (state, action) => {
      state.productsShow = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, showProductDetails } = cartSlice.actions;
