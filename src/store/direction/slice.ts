import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { InitialStateDirection } from "./types";

const initialState: InitialStateDirection = {
  direction: "Bukovel",
};

const directionSlice = createSlice({
  name: "direction",
  initialState,
  reducers: {
    setDirection: (state, action: PayloadAction<string>) => {
      state.direction = action.payload;
    },
  },
});

export const { setDirection } = directionSlice.actions;
export default directionSlice.reducer;
