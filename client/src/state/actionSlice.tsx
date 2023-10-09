import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: null,
};

export const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    setBlog: (state, action) => {
      state.blogs = action.payload.blog;
    },
  },
});

export const { setBlog } = actionSlice.actions;
export default actionSlice.reducer;
