import { configureStore } from "@reduxjs/toolkit";
import lettersSlice from "../modules/lettersSlice";
import nameSlice from "../modules/nameSlice";

const store = configureStore({
  reducer: {
    letters: lettersSlice,
    name: nameSlice,
  },
});

export default store;
