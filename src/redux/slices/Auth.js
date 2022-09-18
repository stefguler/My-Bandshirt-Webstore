import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "token",
  initialState: {
    token: 'alpha'
  },
  reducers: {
    setToken: (state, action) => {
      const newState = {
        token: action.payload
      }
      return newState
    }

  }
})


export const { setToken } = authSlice.actions;
export default authSlice.reducer;