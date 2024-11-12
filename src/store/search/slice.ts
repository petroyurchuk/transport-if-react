import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { InitialStateSearch } from "./types";

const initialState: InitialStateSearch = {
  searchInput: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
