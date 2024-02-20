import { createSlice } from "@reduxjs/toolkit";

const initialState = "카리나";

const nameSlice = createSlice({
  name: "nameReducer",
  initialState,
  reducers: {
    nameSelect: (state, action) => {
      const selectedName = action.payload;
      return selectedName;
    },
  },
});

export const { nameSelect } = nameSlice.actions;
export default nameSlice.reducer;
