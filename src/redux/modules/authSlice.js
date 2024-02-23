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

export const __editProfile = createAsyncThunk(
  "editProfile",

  async (formData, thunkAPI) => {
    try {
      const { data } = await authApi.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const editingObj = {};
      const { nickname, avatar } = data;
      if (nickname) editingObj.nickname = nickname;
      if (avatar) editingObj.avatar = avatar;
      // JSON서버에 내 팬레터들의 닉네임과 아바타 변경
      const userId = localStorage.getItem("userId");
      const { data: myLetters } = await axios.get(
        `http://localhost:5000/letters?userId=${userId}`
      );
      for (const myLetter of myLetters) {
        await axios.patch(
          `http://localhost:5000/letters/${myLetter.id}`,
          editingObj
        );
      }

      return data;

      return data;
    } catch (error) {
      console.log("error", error);
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
      })
      .addCase(__editProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__editProfile.fulfilled, (state, action) => {
        const { avatar, nickname } = action.payload;
        if (avatar) {
          localStorage.setItem("avatar", avatar);
          state.avatar = avatar;
        }
        if (nickname) {
          localStorage.setItem("nickname", nickname);
          state.nickname = nickname;
        }
        state.isLoading = false;
      })
      .addCase(__editProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
