import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cart.slice"
import likeReducer from "./Slice/like.slice";

export const store = configureStore({
  reducer:{
    cart:cartReducer,
    likeProduct:likeReducer
  }
});


export type AppDispatch = typeof store.dispatch;
