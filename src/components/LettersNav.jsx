import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import LetterForm from "components/LetterForm";
import Item from "./Item";
import { LettersContext } from "context/LettersContext";

const StNav = styled.div`
  height: 150px;
  width: 800px;
  background: yellow;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const StUl = styled.ul`
  justify-content: space-around;
  width: 500px;
  border: 1px solid red;
  display: flex;
  align-items: center;
`;

const StButton = styled.button`
  border: 1px solid black;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
`;

//이름을 배열에 담는다.

/*item style*/

const StItemUl = styled.ul`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  gap: 20px;
`;

const StItemLi = styled.li`
  width: 560px;
  height: 200px;
  text-align: center;
  border: 2px solid red;
  border-radius: 15px;
`;

const LetterItems = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProfileImg = styled.div`
  width: 30%;
`;

const LetterItem = styled.div`
  width: 70%;
`;

//말줄임 표시 처리방법
const LengthLimit = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function LettersNav() {
  //context Api
  const { name, setName, letters, setLetters, onSubmitLetter, onclickHandler } =
    useContext(LettersContext);
  const { celebrityList, celebrityJob } = useContext(LettersContext);

  //local Storage오류해결중
  const detailLetter = JSON.parse(localStorage.getItem("letters"));
  console.log("get", detailLetter);
  console.log("-----------");

  useEffect(() => {
    localStorage.setItem("letters", JSON.stringify(letters));
  }, [letters]);

  useEffect(() => {
    console.log("처음에만");
  }, []);
  useEffect(() => {
    console.log("렌더링 될때마다");
  });
  useEffect(() => {
    console.log("값이변경 될때마다");
  }, [letters]);

  return (
    <>
      <StNav>
        <StUl>
          {celebrityList.map((who) => {
            return (
              <StButton
                key={who}
                $hoverItem={who}
                onClick={() => onclickHandler(who)}
                style={{
                  backgroundColor: name === who ? "red" : "initial",
                }}
              >
                {celebrityJob(who)}
              </StButton>
            );
          })}
        </StUl>
      </StNav>
      <LetterForm />
      {/* Item 컴포넌트부분 */}
      <Item />
    </>
  );
}

//브랜치변경완료
export default LettersNav;
