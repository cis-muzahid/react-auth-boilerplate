import {  createSlice } from "@reduxjs/toolkit";
import { fetchloginData } from "../../reducers/login/loginReducer";

const initialState = {
  userData: null,
  loading: false,
  islogin: false,
  error: null,
};


export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    Islogin: (state) => {
      state.islogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchloginData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchloginData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.islogin = true;
        sessionStorage.setItem("userInfo", JSON.stringify(state.userData));
      })
      .addCase(fetchloginData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { Islogin } = loginSlice.actions;

export default loginSlice.reducer;
