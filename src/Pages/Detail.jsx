//detail

import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LettersContext } from "context/LettersContext";
import styled from "styled-components";
import LettersHeader from "components/LettersHeader";
function Detail() {
  //context Api
  const { modifyLetter, click, setClick, setLetters } =
    useContext(LettersContext);

  const params = useParams();
  const navigate = useNavigate();

  //로컬스토리지에 저장한 값 들고오기
  const detailLetter = JSON.parse(localStorage.getItem("letters"));

  //그 값들 중에서 넘겨오는 id와  일치한 것만 보여주기
  const foundLetter = detailLetter.find((letter) => {
    return letter.id === params.id;
  });

  //수정버튼

  //수정내용 state
  const [changeContent, setChangeContent] = useState(foundLetter.content);

  const onChangeLetter = (e) => {
    let { content, id } = foundLetter;

    if (changeContent === content) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    const resultLetter = JSON.parse(localStorage.getItem("letters"));
    const searchData = resultLetter.id;
    const searchIndex = resultLetter.findIndex((e) => e.id === id);
    resultLetter[searchIndex].content = changeContent;

    localStorage.setItem("letters", JSON.stringify(resultLetter));
    const resultLetters = JSON.parse(localStorage.getItem("letters"));
    setLetters(resultLetters);
    setClick(false);

    navigate("/");
  };

  // 삭제버튼
  const deleteLetter = () => {
    alert("삭제하시겠습니까?");
    //detailLetter : 기존배열, deletedLetter : 삭제한 요소
    const searchData = foundLetter.content;
    const searchIndex = detailLetter.findIndex((e) => e.content === searchData);
    const deletedLetter = detailLetter.splice(searchIndex, 1);
    localStorage.setItem("letters", JSON.stringify(detailLetter));
    const test = JSON.parse(localStorage.getItem("letters"));
    setLetters(test);

    navigate("/");
  };

  return (
    <>
      {" "}
      <StHeader>
        <Link to="/">
          <HeaderBtn>YJ's made</HeaderBtn>
        </Link>
        <HeaderBtn>SIGN UP</HeaderBtn>
      </StHeader>
      <StDetail>
        <DetailOneLetter>
          <div>{foundLetter.nickname}</div>
          <div>{foundLetter.createdAt}</div>
          <div>
            {" "}
            {click ? (
              <TextArea
                type="text"
                name="content"
                defaultValue={foundLetter.content}
                onChange={(e) => setChangeContent(e.target.value)}
              ></TextArea>
            ) : (
              <p>{foundLetter.content}</p>
            )}
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {click ? (
                ""
              ) : (
                <DetailBtn onClick={deleteLetter}>삭제하기</DetailBtn>
              )}
              {click ? (
                ""
              ) : (
                <DetailBtn onClick={modifyLetter}>수정하기</DetailBtn>
              )}
              {click ? (
                <DetailBtn
                  name="changeButton"
                  onClick={(e) => onChangeLetter({ foundLetter })}
                >
                  수정완료
                </DetailBtn>
              ) : (
                ""
              )}
              <Link to="/">
                <DetailBtn>홈으로가기</DetailBtn>
              </Link>
            </div>
          </div>
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
