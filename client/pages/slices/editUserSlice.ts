import { createSlice } from '@reduxjs/toolkit';

const editUserSlice = createSlice({
  name: 'editUser',
  initialState: {
    data: null,
    success: false
  }, 
  reducers: {
    setEditUserData: (state, action) => {
      state.data = action.payload,
      state.success = false;
    },
    clearEditUserData: (state) => {
      state.data = null;
    },
    updateUserSuccess: (state) => {
      state.success = true;
    },
    updateUserFailure: (state) => {
      state.success = false
    }
  },
});

export const { setEditUserData, clearEditUserData, updateUserSuccess, updateUserFailure } = editUserSlice.actions;

export default editUserSlice.reducer;