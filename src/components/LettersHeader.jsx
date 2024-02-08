import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LettersHeader() {
  return (
    <>
      <StHeader>
        <Link to="/">
          <HeaderBtn>YJ's made</HeaderBtn>
        </Link>
        <HeaderBtn>SIGN UP</HeaderBtn>
      </StHeader>
    </>
  );
}

export default LettersHeader;

const StHeader = styled.div`
  background-color: black;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
`;

const HeaderBtn = styled.button`
  background-color: #6accc5;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  color: white;
  border: none;
  font-weight: bolder;
`;
