import React from "react";
import { useParams } from "react-router-dom";
import { fakeData } from "shared/DummyData";
import { Link } from "react-router-dom";
import LettersNav from "components/LettersNav";

function Detail(props) {
  const params = useParams();

  const test = JSON.parse(localStorage.getItem("letter"));

  //넘겨오는 id와 fakeData에서 일치한 것만 보여주기
  const foundLetter = test.find((letter) => {
    return letter.id === params.id;
  });

  const deleteLetter = (e) => {
    console.log("fake", foundLetter);
  };
  return (
    <>
      <div>팬레터 하위페이지입니다.</div>
      <br />
      <Link to="/">
        <button>홈으로가기</button>
      </Link>{" "}
      <p>{foundLetter.nickname}</p>
      <p>{foundLetter.createdAt}</p>
      <p>{foundLetter.content}</p>
      <button onClick={deleteLetter}>삭제</button>
      <button>수정</button>
      <br />
      <br />
    </>
  );
}

export default Detail;
