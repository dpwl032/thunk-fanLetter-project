import { createSlice } from "@reduxjs/toolkit";
import { fakeData } from "shared/DummyData";

//초기값
const initialState = fakeData;

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const nextLetter = action.payload;
      return [nextLetter, ...state];
    },
    deleteLetterItem: (state, action) => {
      const deletedLetter = state.filter((item) => item.id !== action.payload);
      return deletedLetter;
    },
    editLetter: (state, action) => {
      let { editContent, id } = action.payload;
      const editedLetter = state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editContent };
        } else {
          return letter;
        }
      });
      return editedLetter;
    },
  },
});

export const { addLetter, deleteLetterItem, editLetter } = lettersSlice.actions;
export default lettersSlice.reducer;
