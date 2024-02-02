import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  border: 1px solid black;
  height: 100px;
  background-color: lightblue;
  width: 800px;
`;

function LettersHeader() {
  return (
    <>
      <StHeader>헤더 입니다.</StHeader>
    </>
  );
}

export default LettersHeader;
