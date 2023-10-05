import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/getAllUsers",
  async (thunkApi) => {
    try {
      const response = await fetch("http://localhost:8080/api/users");
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle error here if needed
      throw error;
    }
  }
);

interface UserState {
  entities: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  entities: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.entities.push(...action.payload);
      }
    );

    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload as string; // Ensure payload is a string
      }
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
