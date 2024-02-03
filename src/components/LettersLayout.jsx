import React from "react";
import List from "./List";
import Item from "./Item";
import styled from "styled-components";
import LettersNav from "./LettersNav";
import LettersHeader from "./LettersHeader";
import Main from "pages/Main";

const StLayout = styled.div`
  width: 100%;
  height: 270px;
  border: 2px solid red;
  background-color: pink;
`;

function LettersLayout() {
  return (
    <>
      <StLayout>
        Layout 부분입니다
        <div>
          <LettersHeader />
          <Main />
          <LettersNav />
          {/* <Form />
          <List /> */}
        </div>
      </StLayout>
    </>
  );
}

export default LettersLayout;
