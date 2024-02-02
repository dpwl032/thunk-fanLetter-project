import React from "react";
import { useParams } from "react-router-dom";
import { fakeData } from "shared/DummyData";
import { Link } from "react-router-dom";

function Detail(props) {
  const params = useParams();
  // console.log(JSON.parse(localStorage.getItem("카리나")));

  // const a = JSON.parse(localStorage.getItem("카리나"));
  // const b = JSON.parse(localStorage.getItem("윈터"));
  // const c = JSON.parse(localStorage.getItem("지젤"));

  //넘겨오는 id와 fakeData에서 일치한 것만 보여주기
  const foundLetter = fakeData.find((letter) => {
    return letter.id === params.id;
  });
  console.log(foundLetter);
  return (
    <>
      <div>팬레터 하위페이지입니다.</div>
      <br />

      <Link to="/">
        <button>홈으로가기</button>
      </Link>

      <br />
      <br />
      <p>{foundLetter.nickname}</p>
      <p>{foundLetter.createdAt}</p>
      <p>{foundLetter.content}</p>
      <button>삭제</button>
      <button>취소</button>
    </>
  );
}

export default Detail;
