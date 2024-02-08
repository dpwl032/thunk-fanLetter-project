import React from "react";
import styled from "styled-components";
import LettersNav from "./LettersNav";
import LettersHeader from "./LettersHeader";

import MusicVideo from "./MusicVideo";

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  background-image: url("");
`;
const MenuBar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: white;
  background-color: black;
  font-family: "Dancing Script", cursive;
`;
function LettersLayout() {
  return (
    <>
      <StLayout>
        <div>
          <LettersHeader />
          <MusicVideo />
          <MenuBar>aespa</MenuBar>
          <LettersNav />
        </div>
      </StLayout>
    </>
  );
}

export default LettersLayout;
