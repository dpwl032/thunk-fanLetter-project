import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function LettersHeader() {
  const { isLogin, auth } = useSelector((state) => state.auth);
  const [login, setLogin] = useState(true);
  const navigator = useNavigate();
  const logout = () => {
    alert("로그아웃됐습니다.");
    localStorage.removeItem("accessToken");
    setLogin(false);
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
        <div>
          <HeaderBtn onClick={goToMypage}>MY PAGE</HeaderBtn>
          <HeaderBtn onClick={logout}>SIGN OUT</HeaderBtn>
        </div>
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
