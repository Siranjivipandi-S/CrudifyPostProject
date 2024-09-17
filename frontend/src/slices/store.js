import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "./CrudifSlice";
import Userslice from "./Userslice";

const store = configureStore({
  reducer: {
    post: PostSlice.reducer,
    user: Userslice.reducer,
  },
});
export default store;
