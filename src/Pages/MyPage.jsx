import React, { useState } from "react";
import styled from "styled-components";
import LettersHeader from "components/LettersHeader";
import { __editProfile, __userCheck } from "../redux/modules/authSlice";
import { useSelector, useDispatch } from "react-redux";
import proImg from "assets/9720037.jpg";
import { toast } from "react-toastify";

function MyPage() {
  const dispatch = useDispatch();
  //rtk
  const { avatar, nickname, userId } = useSelector((state) => state.auth);

  //현재 수정중인지 파악
  const [isEditing, setIsEditing] = useState(false);
  //수정닉네임
  const [editingText, setEditingText] = useState("");

  //사진선택용 상태관리
  const [selectedImg, setSelectedImg] = useState(avatar);

  //서버로 보낼 때는 또 url이 아닌 file형태로 보내야함!
  const [file, setFile] = useState(null);

  const startEdit = () => {
    setIsEditing(!isEditing);
  };

  const changeNickname = (e) => {
    setEditingText(e.target.value);
  };

  //사진 프리뷰 => 사진이 변경되면 보여지게 된다.
  const previewImg = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile.size > 1024 * 1024) {
      return toast.warn("최대 1MB까지 업로드 가능합니다.");
    }
    setFile(imgFile);

    //파일 객체이기때문에 url 소스형식으로 변환해준다.
    const imgUrl = URL.createObjectURL(imgFile);
    setSelectedImg(imgUrl);
  };

  const completeName = (e) => {
    const formData = new FormData();
    if (editingText) {
      formData.append("nickname", editingText);
    }

    if (selectedImg !== avatar) {
      formData.append("avatar", file);
    }

    //서버에 프로필 변경 요청
    dispatch(__editProfile(formData));
    setIsEditing(false);
    alert("수정이 완료됐습니다!");
  };

  return (
    <>
      <LettersHeader />
      <StAuthWrap>
        <AuthChangeForm>
          <p>프로필 관리</p>

          <section>
            <label>
              <input type="file" onChange={previewImg} accept="image/*" />
              <AvatarWrap>
                <AvatarImg src={selectedImg} />
              </AvatarWrap>
            </label>
            <br />
            <p>아이디 : {userId}</p>
            {!isEditing ? (
              <p>닉네임 : {nickname}</p>
            ) : (
              <AuthInput
                autoFocus
                type="text"
                defaultValue={nickname}
                onChange={changeNickname}
              />
            )}
          </section>

          <ButtonWrap>
            {!isEditing ? (
              <AuthBtn onClick={startEdit}>프로필 수정하기</AuthBtn>
            ) : (
              <>
                {" "}
                <AuthBtn onClick={startEdit}>취소</AuthBtn>
                <AuthBtn
                  onClick={completeName}
                  disabled={!editingText && selectedImg === avatar}
                >
                  수정완료
                </AuthBtn>
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

  & > section > label > input {
    display: none;
  }
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

const AvatarWrap = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100px;
`;

const AvatarImg = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100px;
`;
