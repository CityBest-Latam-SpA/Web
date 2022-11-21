import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCountry: null,
};

export const landingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialCountry: (state, { payload }) => {
      state.currentCountry = {
        country_name: payload?.country_name,
        country: payload?.country,
        country_code: payload?.country_code,
        country_calling_code: payload?.country_calling_code,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialCountry } = landingSlice.actions;
