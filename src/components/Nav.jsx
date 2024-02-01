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

  ${(props) => props.hoverItem}:hover {
    border-radius: 10px;
    color: white;
    background-color: red;
  }
`;

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
          <li>
            <StButton hoverItem="singer">가수</StButton>
          </li>
          <li>
            <StButton hoverItem="actor">배우</StButton>
          </li>
          <li>
            <StButton hoverItem="comedian">개그맨</StButton>
          </li>
        </StUl>
      </StNav>
    </>
  );
}

export default Nav;
