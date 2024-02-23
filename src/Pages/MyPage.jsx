import React, { useState } from "react";
import styled from "styled-components";
import LettersHeader from "components/LettersHeader";
import { __userCheck } from "../redux/modules/authSlice";
import { useSelector, useDispatch } from "react-redux";
import proImg from "assets/9720037.jpg";

function MyPage() {
  const [click, setClick] = useState(false);
  const [changeName, setChangeName] = useState("");
  const { avatar, nickname, userId } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startEdit = () => {
    setClick(!click);
  };

  const changeNickname = (e) => {
    setChangeName(e.target.value);
  };

  const completeName = (e) => {};
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
            >
              <img
                src={proImg}
                alt="이미지가 없어요!"
                style={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid black",
                  borderRadius: "100px",
                }}
              />
            </div>{" "}
            <br />
            <p>아이디 : {userId}</p>
            {!click ? (
              <p>닉네임 : {nickname}</p>
            ) : (
              <AuthInput
                type="text"
                defaultValue={nickname}
                onChange={changeNickname}
              />
            )}
          </section>

          <ButtonWrap>
            {!click ? (
              <AuthBtn onClick={startEdit}>프로필 수정하기</AuthBtn>
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
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid #6accc5;
  }
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
