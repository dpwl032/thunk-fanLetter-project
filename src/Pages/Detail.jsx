//detail

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteLetterItem, editLetter } from "../redux/modules/lettersSlice";
import { __deleteLetter, __editLetter } from "../redux/modules/lettersSlice";

function Detail() {
  const [click, setClick] = useState(false);
  //수정내용 state
  const [editContent, setEditContent] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const letter = useSelector((state) => state.letters);

  //전체 letter 중에서 넘겨오는 id와  일치한 item만 보여주기
  const foundLetter = letter.find((letter) => {
    return letter.id === params.id;
  });

  const { nickname, createdAt, content, id } = foundLetter;

  const onChangeLetter = () => {
    if (!editContent) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    dispatch(__editLetter({ id, editContent }));
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

  return (
    <>
      <StHeader>
        <Link to="/">
          <HeaderBtn>YJ's made</HeaderBtn>
        </Link>
        <HeaderBtn>SIGN UP</HeaderBtn>
      </StHeader>
      <StDetail>
        <DetailOneLetter>
          <section>{nickname}</section>
          <section>{createdAt}</section>
          <section>
            {click ? (
              <TextArea
                autoFocus
                type="text"
                name="content"
                defaultValue={content}
                onChange={(e) => setEditContent(e.target.value)}
              ></TextArea>
            ) : (
              <p>{foundLetter.content}</p>
            )}
            <hr />
            <ButtonWrap>
              {click ? (
                ""
              ) : (
                <>
                  <DetailBtn onClick={() => setClick(true)}>수정하기</DetailBtn>
                  <DetailBtn onClick={() => deleteLetter(id)}>
                    삭제하기
                  </DetailBtn>
                </>
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
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
`;

const HeaderBtn = styled.button`
  background-color: #6accc5;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  color: white;
  border: none;
  font-weight: bolder;
`;

const StDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
  background-color: #ede6e69f;
`;

const DetailOneLetter = styled.div`
  border: 1px solid #b9aeae9f;
  border-radius: 20px;
  width: 600px;
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
