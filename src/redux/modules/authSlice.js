import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "axios";

const initialState = {
  auth: [],
  isLogin: false,
  error: null,
};

// 로그인
export const __loginUser = createAsyncThunk(
  "POST_USER",
  async (payload, thunkAPI) => {
    try {
      const { id, password } = payload;
      const user = await api.post(
        "https://moneyfulpublicpolicy.co.kr/login?expiresIn=1m",
        {
          id,
          password,
        }
      );

      console.log(user.data);
      const loginedName = user.data.nickname;
      const userToken = user.data.accessToken;
      localStorage.setItem("accessToken", JSON.stringify(userToken));
      localStorage.setItem("loginedName", JSON.stringify(loginedName));
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
        state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
        // 추가로 상태 업데이트 로직을 작성해야 합니다.
      })
      .addCase(__loginUser.rejected, (state, action) => {
        state.isLoading = false; // 요청이 실패하면 로딩 상태를 false로 변경합니다.
        state.error = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
