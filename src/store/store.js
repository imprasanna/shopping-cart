import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    carts: cartSlice,
  },
});

export default store;
