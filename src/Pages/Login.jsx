import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Login() {
  const [click, setClick] = useState(false);

  const authChange = () => {
    setClick(!click);
  };

  return (
    <>
      {!click ? (
        <StAuthWrap>
          <AuthChangeForm>
            <p>Yj's fan Letter</p>
            <section>
              <p>기존 계정으로 </p>
              <p>로그인이나 회원가입을 해주세요</p>
            </section>

            <AuthInput type="text" placeholder="아이디(4~10글자)" />
            <AuthInput type="text" placeholder="비밀번호(4~15글자)" />

            <ButtonWrap>
              <AuthBtn>로그인</AuthBtn>
              <ChangeBtn onClick={authChange}>회원가입 하러가기</ChangeBtn>
            </ButtonWrap>
          </AuthChangeForm>
        </StAuthWrap>
      ) : (
        <StAuthWrap>
          <AuthChangeForm>
            <p>Yj's fan Letter</p>
            <section>
              <p>기존 계정으로 </p>
              <p>로그인이나 회원가입을 해주세요</p>
            </section>

            <AuthInput type="text" placeholder="아이디(4~10글자)" />
            <AuthInput type="text" placeholder="비밀번호(4~15글자)" />
            <AuthInput type="text" placeholder="닉네임(1~10글자)" />
            <ButtonWrap>
              <AuthBtn>회원가입</AuthBtn>
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

const AuthChangeForm = styled.div`
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
