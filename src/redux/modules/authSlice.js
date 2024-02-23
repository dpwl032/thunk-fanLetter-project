import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../letterAxios/api";
import axios from "axios";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
  isLoading: false,
  isError: false,
  error: null,
};

// 로그인
export const __loginUser = createAsyncThunk(
  "POST_USER",
  async (payload, thunkAPI) => {
    try {
      const { id, password } = payload;
      const user = await authApi.post("/login?expiresIn=10m", {
        id,
        password,
      });

      alert("로그인완료");

      return thunkAPI.fulfillWithValue(user.data);
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
        state.isLoading = true;
      })
      .addCase(__loginUser.fulfilled, (state, action) => {
        const { accessToken, avatar, nickname, userId } = action.payload;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("avatar", avatar);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("userId", userId);
        state.isLogin = true;
        state.avatar = avatar;
        state.nickname = nickname;
        state.userId = userId;
        state.isLoading = false;
      })
      .addCase(__loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
