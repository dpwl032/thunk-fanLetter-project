import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __loginUser } from "../redux/modules/authSlice";
import { useNavigate } from "react-router-dom";
import authApi from "letterAxios/api";

function Login() {
  const [click, setClick] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const authChange = () => {
    setClick(!click);
  };

  const idEventHandler = (e) => {
    const enteredId = e.target.value;

    if (enteredId.length > 10) {
      alert("아이디는 10글자까지만 입력이 가능합니다!");
      return;
    }

    setId(enteredId);
  };
  const pwEventHandler = (e) => {
    const enteredPw = e.target.value;
    if (enteredPw.length > 15) {
      alert("비밀번호는 15글자까지만 입력이 가능합니다!");
      return;
    }
    setPassword(enteredPw);
  };

  const nickNameEventHandler = (e) => {
    const enteredNickName = e.target.value;
    if (enteredNickName.length > 11) {
      alert("닉네임은 10글자까지만 입력이 가능합니다!");
      return;
    }

    setNickname(enteredNickName);
  };

  //회원가입
  const joinEventHandler = async (e) => {
    e.preventDefault();

    if (id.length < 4 || password.length < 4) {
      alert("아이디 및 비밀번호는 4글자 이상 작성해주셔야합니다!");
      return;
    }
    if (nickname.length < 1) {
      alert("최소 한글자 이상은 닉네임을 작성해주세요!");
      return;
    }

    //회원가입 내용 DB에 저장

    try {
      await authApi.post("/register", {
        id,
        password,
        nickname,
      });

      alert("회원가입완료!");
    } catch (error) {
      toast(error.response.data.message);
      return;
    }

    setClick(!click);
  };

  //로그인
  const loginEventHandler = async (e) => {
    // onSubmit 기본 동작 방지
    e.preventDefault();

    // validation check
    if (id.length < 4 || password.length < 4) {
      alert("아이디 및 비밀번호는 4글자 이상 작성해주셔야합니다!");
      return;
    }

    const response = await dispatch(__loginUser({ id, password }));

    // 오류가 발생한 케이스
    if (response.error) {
      toast(response.payload.response.data.message);
      return;
    }

    // 정상인 케이스
    navigator("/");
  };

  return (
    <>
      {!click ? (
        <StAuthWrap>
          <AuthChangeForm onSubmit={loginEventHandler}>
            <p>Yj's fan Letter</p>
            <section>
              <p>기존 계정으로 </p>
              <p>로그인이나 회원가입을 해주세요</p>
            </section>

            <AuthInput
              type="text"
              placeholder="아이디(4~10글자)"
              value={id}
              onChange={idEventHandler}
              name="id"
            />
            <AuthInput
              type="text"
              placeholder="비밀번호(4~15글자)"
              value={password}
              onChange={pwEventHandler}
            />

            <ButtonWrap>
              <AuthBtn>로그인</AuthBtn>
              <ToastContainer />
              <ChangeBtn onClick={authChange}>회원가입 하러가기</ChangeBtn>
            </ButtonWrap>
          </AuthChangeForm>
        </StAuthWrap>
      ) : (
        <StAuthWrap>
          <AuthChangeForm onSubmit={joinEventHandler}>
            <p>Yj's fan Letter</p>
            <section>
              <p>기존 계정으로 </p>
              <p>로그인이나 회원가입을 해주세요</p>
            </section>

            <AuthInput
              type="text"
              placeholder="아이디(4~10글자)"
              value={id}
              onChange={idEventHandler}
            />
            <AuthInput
              type="text"
              placeholder="비밀번호(4~15글자)"
              value={password}
              onChange={pwEventHandler}
            />
            <AuthInput
              type="text"
              placeholder="닉네임(1~10글자)"
              value={nickname}
              onChange={nickNameEventHandler}
            />
            <ButtonWrap>
              <AuthBtn>회원가입</AuthBtn>
              <ToastContainer />
              <ChangeBtn onClick={authChange}>로그인 하러가기</ChangeBtn>
            </ButtonWrap>
          </AuthChangeForm>
        </StAuthWrap>
      )}
    </>
  );
}

export default Login;

const StAuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: #f8f5f5ce;
`;

const AuthChangeForm = styled.form`
  border: 1px solid #b9aeae9f;
  border-radius: 20px;
  width: 500px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;
`;

const AuthBtn = styled.button`
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background-color: #6accc5;
  color: white;
`;

const ChangeBtn = styled.button`
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background-color: white;
  color: black;

  &:hover {
    font-weight: bolder;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const AuthInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    border-bottom: 1px solid #6aabcc;
  }
  outline: none;
  width: 350px;
  height: 30px;
`;
