import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utilities/constants";

const initialState = {
  carts: [],
  productsShow: [],
  cartsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const [id, name, image, price] = action.payload;
      state.carts = [
        ...state.carts,
        { id: id, name: name, img: image, price: price },
      ];
      state.cartsCount = state.carts.length;
    },
    showProductDetails: (state, action) => {
      const [id, name, image, price] = action.payload;
      state.productsShow = { id: id, name: name, img: image, price: price };
    },
    getProducts: (state) => {
      state.productsShow = products;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, showProductDetails } = cartSlice.actions;
