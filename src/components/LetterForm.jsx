import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addLetter } from "../redux/modules/lettersSlice";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { __addLetter } from "../redux/modules/lettersSlice";

function LetterForm() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { avatar, nickname, userId } = useSelector((state) => state.auth);
  const celebrityList = ["지젤", "카리나", "윈터", "닝닝"];
  const [writedTo, setWritedTo] = useState("지젤");
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const onChangeName = (e) => {
    setWritedTo(e.target.value);
  };

  //redux
  const name = useSelector((state) => state.name);

  const accessToken = localStorage.getItem("accessToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!accessToken) {
      alert("토큰이 없어용");
      return;
    }

    const content = e.target.content.value;

    if (!content) {
      alert("빈칸없이 내용을 입력해주세요!");
      return;
    }

    if (content.length >= 100) {
      alert("100글자를 초과할 수 없습니다");
      return;
    }

    onSubmitLetter({
      id: crypto.randomUUID(),
      nickname: nickname,
      content,
      createdAt: dateString,
      avatar: avatar,
      writedTo,
      createdAt: dateString,
      userId: userId,
    });
    e.target.reset();

    alert("팬레터가 등록됐습니다!");
  };

  const onSubmitLetter = async (nextLetter) => {
    dispatch(__addLetter(nextLetter));
  };

  return (
    <>
      <StForm>
        <Toaespa>에스파에게 내용을 작성해주세요!</Toaespa>
        <InputAndBtn onSubmit={handleSubmit}>
          <InputFormSt>
            닉네임 : &nbsp;
            {nickname}
          </InputFormSt>
          <TextFormSt>
            내용 : &nbsp;
            <textarea
              name="content"
              type="text"
              placeholder="최대 100자까지 작성할 수 있습니다."
              style={{
                width: "300px",
                height: "150px",
                resize: "none",
              }}
            />
          </TextFormSt>
          <SelectWrap>
            <select value={writedTo} onChange={onChangeName}>
              {celebrityList.map((name) => (
                <option value={`${name}`} key={name}>
                  {name}
                </option>
              ))}
            </select>
            <button>전송하기</button>
          </SelectWrap>
        </InputAndBtn>
      </StForm>
    </>
  );
}

export default LetterForm;

const StForm = styled.div`
  background-color: black;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Toaespa = styled.div`
  background-color: black;
  width: 900px;
  color: white;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputAndBtn = styled.form`
  width: 900px;

  height: 85%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const InputFormSt = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextFormSt = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectWrap = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
