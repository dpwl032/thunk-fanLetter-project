import React, { useState } from "react";
import styled from "styled-components";
import LettersHeader from "components/LettersHeader";
import { __userCheck } from "../redux/modules/authSlice";
import { useSelector, useDispatch } from "react-redux";
function MyPage() {
  const [click, setClick] = useState(false);
  const { isLogin, auth, check } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  dispatch(__userCheck(auth.accessToken));

  console.log("마이페이지", check);

  const startEdit = () => {
    setClick(true);
  };

  const token = localStorage.getItem("accessToken");
  if (token) {
    // 이미지파일을 FormData에 담는 방법

    const formData = new FormData();
    // avatar와 nickname 중 하나 또느 모두 변경 가능
    // formData.append("avatar", imgFile);
    // formData.append("nickname", nickname);

    // 요청 시 Content-Type에 유의
    // const response = await axios.patch(`${BASE_URL}/profile`, formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     }
    // );
  }

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
            <p>아이디 : {check.id}</p>
            {!click ? (
              <p>닉네임 : {check.nickname}</p>
            ) : (
              <AuthInput type="text" />
            )}
          </section>

          <ButtonWrap>
            {!click ? (
              <AuthBtn onClick={startEdit}>수정하기</AuthBtn>
            ) : (
              <>
                {" "}
                <AuthBtn>취소</AuthBtn>
                <AuthBtn>수정완료</AuthBtn>
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
