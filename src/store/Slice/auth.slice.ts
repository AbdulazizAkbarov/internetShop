import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginType = {
  accessToken?: string;
  user?: {
    id: number;
    name: string;
    token: string;
    role: string;
    email: string;
    phone: number;
  };
};

const getInitialAuthState = (): LoginType => {
  if (typeof window !== "undefined") {
    const auth = localStorage.getItem("user");
    if (auth) {
      try {
        const person = JSON.parse(auth);
        return {
          accessToken: person.accessToken,
          user: person.user,
        };
      } catch (error) {
        console.error(error);
      }
    }
  }
  return {
    accessToken: undefined,
    user: undefined,
  };
};

const initialState: LoginType = getInitialAuthState();

export const loginSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    login: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
