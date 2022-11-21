import { configureStore } from "@reduxjs/toolkit";
import { landingSlice } from "./landingSlice";

export const store = configureStore({
  reducer: {
    landing: landingSlice.reducer,
  },
});
