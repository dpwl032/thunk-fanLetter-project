import React, { useRef } from "react";
import styled from "styled-components";

const StForm = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid black;
`;

function LetterForm({ onSubmitLetter }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const writedTo = e.target.writedTo.value;
    const nickname = e.target.nickname.value;
    const content = e.target.content.value;

    if (!nickname || !content) {
      alert("빈칸없이 내용을 입력해주세요!");
    }

    if (nickname.length >= 20) {
      alert("20글자를 초과할 수 없습니다");
    }

    if (content.length >= 100) {
      alert("100글자를 초과할 수 없습니다");
    }

    onSubmitLetter({
      id: crypto.randomUUID(),
      nickname,
      writedTo,
      content,
    });

    // localStorage.setItem("letterDate", createdAt);
    // localStorage.setItem("letterNickname", nickname);
    // localStorage.setItem("letterContent", content);
    // localStorage.setItem("letterId", id);
    // localStorage.setItem("letterWriteTo", writedTo);

    e.target.reset();
  };

  return (
    <>
      <StForm>
        Form 영역입니다.
        <br />
        <form onSubmit={handleSubmit}>
          <label>닉네임 :</label>
          <input
            name="nickname"
            type="content"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            style={{
              width: "250px",
              height: "20px",
            }}
          />
          <br />
          <br />
          <label>내용 :</label>
          <input
            name="content"
            type="text"
            placeholder="최대 100자까지 작성할 수 있습니다."
            style={{
              width: "300px",
              height: "150px",
            }}
          />
          <br />
          <br />
          누구에게 보내실건가요? <br />
          <select name="writedTo">
            <option value="지젤">지젤</option>
            <option value="카리나">카리나</option>
            <option value="닝닝">닝닝</option>
            <option value="윈터">윈터</option>
          </select>
          <button>팬래터 등록</button>
        </form>
      </StForm>
    </>
  );
}

export default LetterForm;
