// * Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// * Redux Slices
import { reducer as newReducer } from "../news/slices";

export function createStore() {
  const store = configureStore({
    reducer: {
      news: newReducer,
    },
  });

  return store;
}

// * Export
export const store = createStore({});