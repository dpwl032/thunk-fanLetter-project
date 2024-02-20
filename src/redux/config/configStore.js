import { configureStore } from "@reduxjs/toolkit";
import lettersSlice from "../modules/lettersSlice";
import nameSlice from "../modules/nameSlice";
import authSlice from "../modules/authSlice";

const store = configureStore({
  reducer: {
    letters: lettersSlice,
    name: nameSlice,
    auth: authSlice,
  },
});

export default store;
