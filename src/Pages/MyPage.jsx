import React, { useState } from "react";
import styled from "styled-components";
import LettersHeader from "components/LettersHeader";
import { __userCheck } from "../redux/modules/authSlice";
import { useSelector, useDispatch } from "react-redux";
function MyPage() {
  const [click, setClick] = useState(false);
  const [changeName, setChangeName] = useState("");
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log("auth", auth);

  const startEdit = () => {
    setClick(!click);
  };

  const changeNickname = (e) => {
    setChangeName(e.target.value);
    console.log("밍", e.target.value);
  };

  const completeName = (e) => {
    console.log("밍", changeName);
  };
  const formData = new FormData();

  return (
    <>
      <LettersHeader />
      <StAuthWrap>
        <AuthChangeForm>
          <p>프로필 관리</p>

          <input type="file" />
          <section>
            <div
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid black",
                borderRadius: "100px",
              }}
            ></div>
            <p>아이디 : {auth.userId}</p>
            {!click ? (
              <p>닉네임 : {auth.nickname}</p>
            ) : (
              <AuthInput
                type="text"
                defaultValue={auth.nickname}
                onChange={changeNickname}
              />
            )}
          </section>
          <ButtonWrap>
            {!click ? (
              <AuthBtn onClick={startEdit}>수정하기</AuthBtn>
            ) : (
              <>
                {" "}
                <AuthBtn onClick={startEdit}>취소</AuthBtn>
                <AuthBtn onClick={completeName}>수정완료</AuthBtn>
              </>
            )}
          </ButtonWrap>
        </AuthChangeForm>
      </StAuthWrap>
    </>
  );
}

export default MyPage;

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
  height: 500px;
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
