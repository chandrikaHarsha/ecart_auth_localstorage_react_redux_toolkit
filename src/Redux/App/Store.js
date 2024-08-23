import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/CartSlice";

export const store = configureStore({
  reducer: {
    Cart: cartSlice,
  },
});
