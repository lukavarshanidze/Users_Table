import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"
import currentUserReducer from '../slices/currentUserSlice'
import editUserReducer from '../slices/editUserSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      currentUser: currentUserReducer,
      editUser: editUserReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
