import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cart.slice"

export const store = configureStore({
  reducer:{
    cart:cartReducer
  }
});


export type AppDispatch = typeof store.dispatch;