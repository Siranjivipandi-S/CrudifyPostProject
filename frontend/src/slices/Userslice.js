import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const Userslice = createSlice({
  name: "user",
  initialState: {
    user: [],
    isloading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignUpUser.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(SignUpUser.rejected, (state) => {
      state.isloading = false;
      state.isError = true;
    });
    builder.addCase(SignUpUser.fulfilled, (state, action) => {
      state.isloading = false;
      state.user.push(action.payload);
    });
    builder.addCase(SigninUser.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(SigninUser.rejected, (state) => {
      state.isloading = false;
      state.isError = true;
    });
    builder.addCase(SigninUser.fulfilled, (state, action) => {
      state.isloading = false;
      state.user.push(action.payload);
    });
  },
});
const baseUrl = "http://127.0.0.1:5000";
export const SignUpUser = createAsyncThunk("/SignUpUser", async (post) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, post);
  } catch (error) {
    console.error(error);
  }
});
export const SigninUser = createAsyncThunk("/SignInUser", async (post) => {
  try {
    const response = await axios.post(`${baseUrl}/signin`, post);
  } catch (error) {
    console.error(error);
  }
});
export default Userslice;
