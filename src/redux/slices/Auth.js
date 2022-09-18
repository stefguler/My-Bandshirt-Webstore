import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "token",
  initialState: {
    token: undefined
  },
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload
  }
}})


export const { setToken } = authSlice.actions;
export default authSlice.reducer;
