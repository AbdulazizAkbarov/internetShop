import { ProductType } from "@/pages/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LikeState = {
  items: ProductType[];
};

const initialState: LikeState = {
  items: [],
};

const likeSlice = createSlice({
  name: "Like",
  initialState,
  reducers: {
    like: (state, action: PayloadAction<ProductType>) => {
      const isLiked = state.items.find((i) => i.id === action.payload.id);
      if (isLiked) {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { like } = likeSlice.actions;
export default likeSlice.reducer;
