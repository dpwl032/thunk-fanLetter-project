import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import LettersNav from "components/LettersNav";
import { useRef, useState } from "react";
import styled from "styled-components";

function Detail(props) {
  const params = useParams();
  const navigate = useNavigate();

  const detailLetter = JSON.parse(localStorage.getItem("letters"));

  //넘겨오는 id와 fakeData에서 일치한 것만 보여주기
  const foundLetter = detailLetter.find((letter) => {
    return letter.id === params.id;
  });

  const modifyLetter = (e) => {
    setClick(!click);
  };

  const [click, setClick] = useState(false);
  const [content, setContent] = useState("");

  const onChangeText = (e) => {
    console.log("수정내용", content);
    if (!content) {
      alert("수정한 내용이 없습니다.");
    } else {
      alert("이대로 수정하시겠습니까?");
    }
  };

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const deleteLetter = () => {
    alert("삭제하시겠습니까?");
    console.log("기존배열", detailLetter);
    const deletedLetter = detailLetter.splice(params.id, 1);
    console.log("삭제된 배열", deletedLetter);
    console.log("기존배열", detailLetter);
    localStorage.setItem("letters", JSON.stringify(detailLetter));
    navigate("/");
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
      {click ? (
        <textarea
          type="text"
          name="content"
          defaultValue={foundLetter.content}
          onChange={onChange}
        ></textarea>
      ) : (
        <p>{foundLetter.content}</p>
      )}
      <br />
      <br />
      <button onClick={deleteLetter}>삭제하기</button>
      <button onClick={modifyLetter}>수정하기</button>
      <br />
      <br />
      <button name="changeButton" onClick={onChangeText}>
        수정완료
      </button>
    </>
  );
}
export default Detail;
