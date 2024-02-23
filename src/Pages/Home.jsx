import React from "react";
import styled from "styled-components";
import LettersNav from "../components/LettersNav";
import LettersHeader from "../components/LettersHeader";
import MusicVideo from "../components/MusicVideo";
import { useNavigate } from "react-router-dom";
function LettersLayout() {
  const navigate = useNavigate();

  const tk = localStorage.getItem("accessToken");
  if (!tk) {
    navigate("/login");
  }

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

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
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
