import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function LettersHeader() {
  const navigator = useNavigate();
  const logout = () => {
    alert("로그아웃됐습니다.");
    localStorage.removeItem("accessToken");
    navigator("/login");
  };

  const goToMypage = () => {
    navigator("/my");
  };
  return (
    <>
      <StHeader>
        <Link to="/">
          <HeaderBtn>YJ's made</HeaderBtn>
        </Link>
        <HeaderItemWrap>
          <HeaderBtn onClick={goToMypage}>MY PAGE</HeaderBtn>
          <span style={{ color: "gray" }}>&nbsp;|&nbsp; </span>
          <HeaderBtn onClick={logout}>SIGN OUT</HeaderBtn>
        </HeaderItemWrap>
      </StHeader>
    </>
  );
}

export default LettersHeader;

const StHeader = styled.div`
  background-color: black;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;

const HeaderBtn = styled.button`
  background: linear-gradient(to bottom, #6ab8c8, #2adc9e);
  &:hover {
    cursor: pointer;
  }
  width: 89px;
  height: 36px;
  border-radius: 100px;
  color: white;
  border: none;
  font-weight: bolder;
`;

const HeaderItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
