import { configureStore } from "@reduxjs/toolkit";
import soundReducer from "../features/soundSlice";

export const store = configureStore({
  reducer: {
    sounds: soundReducer,
  },
});
