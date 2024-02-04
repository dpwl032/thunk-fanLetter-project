import React from "react";
import styled from "styled-components";
import LettersNav from "./LettersNav";
import LettersHeader from "./LettersHeader";
import { LettersContext } from "context/LettersContext";

const StLayout = styled.div`
  width: 100%;
  height: 270px;
  border: 2px solid red;
  background-color: pink;
`;

function LettersLayout() {
  return (
    <>
      <LetterProvider>
        <StLayout>
          Layout 부분입니다
          <div>
            <LettersHeader />
            <LettersNav />
            {/* <Form />
          <List /> */}
          </div>
        </StLayout>
      </LetterProvider>
    </>
  );
}

export default LettersLayout;
