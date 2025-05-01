import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cart.slice"
import likeReducer from "./Slice/like.slice";
import { loginSlice } from "./Slice/auth.slice";

export const store = configureStore({
  reducer:{
    cart:cartReducer,
    likeProduct:likeReducer,
    login:loginSlice.reducer
  }
});


export type AppDispatch = typeof store.dispatch;
