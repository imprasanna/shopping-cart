import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authReducer,
  },
});

export default store;
