import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();

  //로컬스토리지에 저장한 값 들고오기
  const detailLetter = JSON.parse(localStorage.getItem("letters"));

  //그 값들 중에서 넘겨오는 id와  일치한 것만 보여주기
  const foundLetter = detailLetter.find((letter) => {
    return letter.id === params.id;
  });

  // 삭제버튼
  const deleteLetter = () => {
    alert("삭제하시겠습니까?");
    //detailLetter : 기존배열, deletedLetter : 삭제한 요소
    const searchData = foundLetter.content;
    const searchIndex = detailLetter.findIndex((e) => e.content === searchData);
    const deletedLetter = detailLetter.splice(searchIndex, 1);
    localStorage.setItem("letters", JSON.stringify(detailLetter));
    console.log("로컬테스트", JSON.parse(localStorage.getItem("letters")));

    //홈으로이동
    navigate("/main");
  };

  //수정버튼
  const modifyLetter = (e) => {
    setClick(!click);
  };
  const [click, setClick] = useState(false);

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
    const searchIndex = detailLetter.findIndex((e) => e.id === id);

    console.log("수정중", (resultLetter[searchIndex].content = changeContent));
    localStorage.setItem("letters", JSON.stringify(resultLetter));

    //홈으로 이동
    navigate("/main");
  };

  return (
    <>
      <div>팬레터 세부페이지입니다.</div>
      <br />
      <Link to="/main">
        <button>홈으로가기</button>
      </Link>
      <p>{foundLetter.nickname}</p>
      <p>{foundLetter.createdAt}</p>
      {click ? (
        <textarea
          type="text"
          name="content"
          defaultValue={foundLetter.content}
          onChange={(e) => setChangeContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{foundLetter.content}</p>
      )}
      <br />
      <br />
      {click ? "" : <button onClick={deleteLetter}>삭제하기</button>}
      {click ? "" : <button onClick={modifyLetter}>수정하기</button>}

      <br />
      <br />
      {click ? (
        <button
          name="changeButton"
          onClick={(e) => onChangeLetter({ foundLetter })}
        >
          수정완료
        </button>
      ) : (
        ""
      )}
    </>
  );
}
export default Detail;
