import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Slice/cart.slice";

export const store = configureStore({
  reducer:{
    cart:cartSlice.reducer
  }
});


export type AppDispatch = typeof store.dispatch;