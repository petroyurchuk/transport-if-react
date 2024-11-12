import { configureStore } from "@reduxjs/toolkit";
import DirectionReducer from "./direction/slice";
import SearchReducer from "./search/slice";
import FilterReducer from "./filter/slice";

export const store = configureStore({
  reducer: {
    direction: DirectionReducer,
    search: SearchReducer,
    filter: FilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
