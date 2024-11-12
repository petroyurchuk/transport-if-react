import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { InitialStateFilter } from "./types";

const initialState: InitialStateFilter = {
  filter: "піші",
};

const filterSlice = createSlice({
  name: "direction",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
