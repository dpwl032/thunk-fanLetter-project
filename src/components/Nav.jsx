import React from "react";
import styled from "styled-components";

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

  ${(props) => props.$hoverItem}:hover {
    border-radius: 10px;
    color: white;
    background-color: red;
  }
`;

//연예인들의 직업을 배열에 담는다.
const celebrityList = ["singer", "actor", "comedian"];

//직업을 넣으면 어느 분야의 연예인인지 함수를 만든다.
const celebrityJob = (job) => {
  switch (job) {
    case "singer":
      return "가수";
    case "actor":
      return "배우";
    case "comedian":
      return "개그맨";
    default:
      return "연예인이 아닙니다";
  }
};

const StButton = styled.button`
  border: 1px solid black;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
`;

function Nav() {
  return (
    <>
      <StNav>
        <StUl>
          {celebrityList.map((job) => {
            return (
              <StButton key={job} $hoverItem={job}>
                {celebrityJob(job)}
              </StButton>
            );
          })}
        </StUl>
      </StNav>
    </>
  );
}

export default Nav;
