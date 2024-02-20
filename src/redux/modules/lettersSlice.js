import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeData } from "shared/DummyData";
import axios from "axios";

//초기값
const initialState = {
  letters: [],
  isLoad: false,
  error: null,
};

export const __getLetter = createAsyncThunk(
  "getLETTER",
  async (payload, thunkAPI) => {
    try {
      const allLetter = await axios.get("http://localhost:5000/letters");
      return thunkAPI.fulfillWithValue(allLetter.data);
    } catch (error) {
      console.log("팬레터 가져오기 오류", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __addLetter = createAsyncThunk(
  "addLETTER",
  async (payload, thunkAPI) => {
    //payload : new letter
    try {
      const newLetter = await axios.post(
        "http://localhost:5000/letters",
        payload
      );
      return thunkAPI.fulfillWithValue(newLetter.data);
    } catch (error) {
      console.log("팬레터 추가하기 오류", error);
      return thunkAPI.rejectWithValue(error);
    }
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
    } catch (error) {
      console.log("팬레터 삭제하기 오류", error);
    }
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
    } catch (error) {
      console.log("팬레터 수정하기 오류", error);
    }
  }
);

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addLetter.pending, (state, action) => {
        state.isLoad = false;
      })
      .addCase(__getLetter.fulfilled, (state, action) => {
        state.isLoad = false;
        state.letters = action.payload;
      })
      .addCase(__addLetter.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {} = lettersSlice.actions;
export default lettersSlice.reducer;
