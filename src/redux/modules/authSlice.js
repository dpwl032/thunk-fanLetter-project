import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  auth: [],
  isLogin: false,
  error: null,
  check: [],
};

// 로그인
export const __loginUser = createAsyncThunk(
  "POST_USER",
  async (payload, thunkAPI) => {
    try {
      const { id, password } = payload;
      const user = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login?expiresIn=10m",
        {
          id,
          password,
        }
      );

      const userToken = user.data.accessToken;
      const nickname = user.data.nickname;
      const avatar = user.data.avatar;
      const userId = user.data.userId;
      localStorage.setItem("nickname", JSON.stringify(nickname));
      localStorage.setItem("accessToken", JSON.stringify(userToken));
      localStorage.setItem("avatar", JSON.stringify(avatar));
      localStorage.setItem("userId", JSON.stringify(userId));

      alert("로그인완료");

      return thunkAPI.fulfillWithValue(user.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __userCheck = createAsyncThunk(
  "userCheck",
  async (payload, thunkAPI) => {
    try {
      const check = await axios.get("https://moneyfulpublicpolicy.co.kr/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${payload}`,
        },
      });

      console.log("auth", check);
      return thunkAPI.fulfillWithValue(check.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__loginUser.pending, (state, action) => {
        state.isLogin = false;
      })
      .addCase(__loginUser.fulfilled, (state, action) => {
        state.isLogin = true;
        state.auth = action.payload;
      })
      .addCase(__loginUser.rejected, (state, action) => {
        state.isLogin = false;
        state.error = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
