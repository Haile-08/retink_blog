import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: null,
};

export const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {},
});

export const {} = actionSlice.actions;
export default actionSlice.reducer;
