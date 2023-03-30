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
    removeFromCart: (state, action) => {
      const filterCart = state.carts.filter((cart) => {
        return cart.id !== action.payload;
      });
      state.carts = filterCart;
      state.cartsCount = state.carts.length;
    },
    showProductDetails: (state, action) => {
      state.productsShow = action.payload;
    },
    showShoppingCart: (state) => {
      state.carts = [...state.carts];
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  showProductDetails,
  removeFromCart,
  showShoppingCart,
} = cartSlice.actions;
