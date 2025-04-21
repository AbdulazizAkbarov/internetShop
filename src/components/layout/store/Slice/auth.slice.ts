import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginType = {
  accsessToken?: string;
  user?: {
    id: number;
    name:string
    token:string
    role:string
    email:string
    phone:number
    
  };
};

const initialState: LoginType = {
  accsessToken: undefined,
};

export const loginSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    login: (state, { payload }) => {
        state.accsessToken=payload.accsessToken
        state.user =payload.user
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
