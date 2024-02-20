import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeData } from "shared/DummyData";
import axios from "axios";

//초기값
const initialState = fakeData;

export const __getLetter = createAsyncThunk(
  "getLETTER",
  (payload, thunkAPI) => {
    try {
      const allLetter = axios.get("http://localhost:5000/letters");
      console.log(allLetter.data);
    } catch (error) {
      console.log("getLetter 오류", error);
    }
  }
);
export const __addLetter = createAsyncThunk(
  "addLETTER",
  (payload, thunkAPI) => {
    //payload : new letter
    try {
      const newLetter = axios.post("http://localhost:5000/letters", payload);
      console.log("newLetter", newLetter);
    } catch (error) {}
  }
);

export const __deleteLetter = createAsyncThunk(
  "deleteLETTER",
  (payload, thunkAPI) => {
    try {
      const deleteLetter = axios.delete(
        //payload : id
        `http://localhost:5000/letters/${payload}`
      );
      console.log(" deleteLetter", deleteLetter);
    } catch (error) {}
  }
);

export const __editLetter = createAsyncThunk(
  "editLETTER",
  (payload, thunkAPI) => {
    try {
      //payload : id와 수정내용
      const editLetter = axios.patch(
        //payload : id
        `http://localhost:5000/letters/${payload}`
      );
      console.log(" editLetter", editLetter);
    } catch (error) {}
  }
);

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
