import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    setCurrentUserId: (state, action) => action.payload,
    clearCurrentUserId: () => null,
  },
});

export const { setCurrentUserId, clearCurrentUserId } = currentUserSlice.actions;

export default currentUserSlice.reducer;