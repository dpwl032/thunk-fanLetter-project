import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeData } from "shared/DummyData";
import axios from "axios";

//초기값
const initialState = {
  letters: [],
  isLoading: true,
  isError: false,
  error: null,
};

//갱신코드 ⭐⭐⭐⭐
const getLettersFromDB = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/letters?_sort=-createdAt"
  );
  return data;
};

export const __getLetter = createAsyncThunk(
  "getLETTER",
  async (payload, thunkAPI) => {
    try {
      const letters = await getLettersFromDB();
      return letters;
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
      await axios.post("http://localhost:5000/letters", payload);
      const letters = await getLettersFromDB();
      return letters;
    } catch (error) {
      console.log("팬레터 추가하기 오류", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteLetter = createAsyncThunk(
  "deleteLETTER",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(
        //payload : id
        `http://localhost:5000/letters/${payload}`
      );
      const letters = getLettersFromDB();
      return letters;
    } catch (error) {
      console.log("팬레터 삭제하기 오류", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editLetter = createAsyncThunk(
  "editLETTER",
  async (payload, thunkAPI) => {
    try {
      //payload : id와 수정내용
      console.log("payload", payload);
      const { foundId, editContent } = payload;

      await axios.patch(`http://localhost:5000/letters/${foundId}`, {
        content: editContent,
      });
      const letters = getLettersFromDB();
      return letters;
    } catch (error) {
      console.log("팬레터 수정하기 오류", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__getLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(__addLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__addLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(__addLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(__deleteLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__deleteLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(__deleteLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(__editLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__editLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(__editLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {} = lettersSlice.actions;
export default lettersSlice.reducer;
