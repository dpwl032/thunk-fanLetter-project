//detail

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  __deleteLetter,
  __editLetter,
  __getLetter,
} from "../redux/modules/lettersSlice";
import { useEffect } from "react";

function Detail() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    localStorage.removeItem("accessToken");
    navigator("/login");
  }
  const dispatch = useDispatch();

  //redux

  const [click, setClick] = useState(false);
  //수정내용 state
  const [editContent, setEditContent] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const { letters } = useSelector((state) => state.letters);
  const { nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(__getLetter());
  }, [dispatch]);

  //전체 letter 중에서 넘겨오는 id와  일치한 item만 보여주기
  const foundLetter = letters.find((letter) => {
    return letter.id === params.id;
  });

  const { id: foundId, createdAt, writedTo } = foundLetter;
  const onChangeLetter = () => {
    if (!editContent) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    dispatch(__editLetter({ foundId, editContent }));
    setClick(false);
    alert("수정이 완료됐습니다.");
    navigate("/");
  };

  // 삭제버튼
  const deleteLetter = (id) => {
    alert("삭제하시겠습니까?");
    dispatch(__deleteLetter(id));
    navigate("/");
  };

  //header
  const logout = () => {
    alert("로그아웃됐습니다.");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const goToMypage = () => {
    navigate("/my");
  };
  return (
    <>
      <StHeader>
        <Link to="/">
          <HeaderBtn>YJ's made</HeaderBtn>
        </Link>
        <HeaderItemWrap>
          <HeaderBtn onClick={goToMypage}>MY PAGE</HeaderBtn>
          <span style={{ color: "gray" }}>&nbsp;|&nbsp; </span>
          <HeaderBtn onClick={logout}>SIGN OUT</HeaderBtn>
        </HeaderItemWrap>
      </StHeader>
      <StDetail>
        <DetailOneLetter>
          <section>To. {writedTo}</section>
          <section>From. {nickname}</section>
          <section>{createdAt}</section>
          <section>
            {click ? (
              <TextArea
                autoFocus
                type="text"
                name="content"
                defaultValue={foundLetter.content}
                onChange={(e) => setEditContent(e.target.value)}
              ></TextArea>
            ) : (
              <p>{foundLetter.content}</p>
            )}
            <hr />
            <ButtonWrap>
              {foundLetter.nickname === nickname ? (
                !click ? (
                  <>
                    <DetailBtn onClick={() => setClick(true)}>
                      수정하기
                    </DetailBtn>
                    <DetailBtn onClick={() => deleteLetter(foundLetter.id)}>
                      삭제하기
                    </DetailBtn>
                  </>
                ) : (
                  ""
                )
              ) : (
                ""
              )}

              {click ? (
                <>
                  {" "}
                  <DetailBtn onClick={() => setClick(false)}>
                    취소하기
                  </DetailBtn>
                  <DetailBtn
                    name="changeButton"
                    onClick={(e) => onChangeLetter({ foundLetter })}
                  >
                    수정완료
                  </DetailBtn>
                </>
              ) : (
                ""
              )}
              <Link to="/">
                <DetailBtn>홈으로가기</DetailBtn>
              </Link>
            </ButtonWrap>
          </section>
        </DetailOneLetter>
      </StDetail>
    </>
  );
}
export default Detail;

const StHeader = styled.div`
  background-color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;

const HeaderBtn = styled.button`
  background: linear-gradient(to bottom, #6ab8c8, #2adc9e);
  width: 89px;
  height: 36px;
  border-radius: 100px;
  color: white;
  border: none;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: #ede6e69f;
`;

const DetailOneLetter = styled.div`
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

const DetailBtn = styled.button`
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background-color: #6accc5;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid #6accc5;
  }
  color: white;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 350px;
  height: 170px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
