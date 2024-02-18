import React from "react";
import styled from "styled-components";
import LetterForm from "components/LetterForm";
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import { nameSelect } from "../redux/modules/name";

function LettersNav() {
  //redux
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const celebrityList = ["지젤", "카리나", "윈터", "닝닝"];

  const celebrityJob = (who) => {
    switch (who) {
      case "지젤":
        return "지젤";
      case "카리나":
        return "카리나";
      case "윈터":
        return "윈터";
      case "닝닝":
        return "닝닝";
      default:
        return "연예인이 아닙니다";
    }
  };

  const onclickHandler = (who) => {
    dispatch(nameSelect(who));
  };

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
                  backgroundColor: name === who ? "gray" : "initial",
                }}
              >
                {celebrityJob(who)}
              </StButton>
            );
          })}
        </StUl>
      </StNav>
      <LetterForm />
      <div style={{ background: "black" }}> &nbsp;</div>
      {/* Item 컴포넌트부분 */}
      <Item />
    </>
  );
}

export default LettersNav;

const StNav = styled.div`
  height: 240px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
`;

const StUl = styled.ul`
  background-color: white;
  justify-content: space-around;
  width: 800px;
  border: 1px solid red;
  display: flex;
  align-items: center;
`;

const StButton = styled.button`
  border: 1px solid black;
  width: 140px;
  height: 160px;
  border-radius: 20px;
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
