import {
  createActionCreatorInvariantMiddleware,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import api from "axios";
import { act } from "react-dom/test-utils";

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
      const user = await api.post(
        "https://moneyfulpublicpolicy.co.kr/login?expiresIn=1m",
        {
          id,
          password,
        }
      );

      const userToken = user.data.accessToken;
      const nickname = user.data.nickname;
      localStorage.setItem("nickname", JSON.stringify(nickname));
      localStorage.setItem("accessToken", JSON.stringify(userToken));

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
      const check = await api.get("https://moneyfulpublicpolicy.co.kr/user", {
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${payload}`,
        // },
      });

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
        state.isLogin = true; // 네트워크 요청이 끝났으니, false로 변경합니다.
        // 추가로 상태 업데이트 로직을 작성해야 합니다.
        state.auth = action.payload;
      })
      .addCase(__loginUser.rejected, (state, action) => {
        state.isLogin = false; // 요청이 실패하면 로딩 상태를 false로 변경합니다.
        state.error = action.payload;
      })
      .addCase(__userCheck.fulfilled, (state, action) => {
        state.isLogin = true;

        state.check = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
