import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "axios";

const initialState = {
  isLogin: false,
  error: null,
};

// 로그인
export const __loginUser = createAsyncThunk(
  "POST_USER",
  async (payload, thunkAPI) => {
    try {
      const { id, password } = payload;
      const member = await api.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );
      console.log("로그인 정보", member.data);
      console.log("토근", member.data.accessToken);
      return thunkAPI.fulfillWithValue(member.data);
    } catch (error) {
      // 만약 오류가 나면 여기!
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
