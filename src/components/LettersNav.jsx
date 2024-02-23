import React from "react";
import styled from "styled-components";
import LetterForm from "components/LetterForm";
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import { nameSelect } from "../redux/modules/nameSlice";
import { useState } from "react";
import ningning from "assets/img/ningning.webp";
import karina from "assets/img/karina.webp";
import winter from "assets/img/winter.webp";
import giselle from "assets/img/giselle.webp";

function LettersNav() {
  //redux
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const celebrityList = ["카리나", "윈터", "지젤", "닝닝"];
  const [selectedAespa, setSelectedAespa] = useState("카리나");

  const onclickHandler = (who) => {
    dispatch(nameSelect(who));
    setSelectedAespa(who);
  };

  return (
    <>
      <StNav>
        <StUl>
          <AespaImg
            src={karina}
            onClick={() => onclickHandler("카리나")}
            isSelected={selectedAespa === "카리나"}
          />
          <AespaImg
            src={winter}
            onClick={() => onclickHandler("윈터")}
            isSelected={selectedAespa === "윈터"}
          />
          <AespaImg
            src={giselle}
            onClick={() => onclickHandler("지젤")}
            isSelected={selectedAespa === "지젤"}
          />
          <AespaImg
            src={ningning}
            onClick={() => onclickHandler("닝닝")}
            isSelected={selectedAespa === "닝닝"}
          />
        </StUl>
      </StNav>

      <StName>
        <StUlName>
          {celebrityList.map((who) => {
            return (
              <span key={who} style={{ color: "white", fontWeight: "bolder" }}>
                {who}
              </span>
            );
          })}
        </StUlName>
      </StName>

      <LetterForm />

      <div style={{ background: "black" }}> &nbsp;</div>
      {/* Item 컴포넌트부분 */}
      <Item />
    </>
  );
}

export default LettersNav;

const StNav = styled.div`
  height: 240px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
`;

const StUl = styled.ul`
  justify-content: space-around;
  width: 900px;
  display: flex;
  align-items: center;
`;

const StName = styled.div`
  height: 50px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
`;

const StUlName = styled.ul`
  background-color: black;
  justify-content: space-around;
  width: 900px;
  display: flex;
  align-items: center;
`;

const AespaImg = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 20px;
  &:hover {
    filter: grayscale(100%);
  }
  filter: grayscale(${(props) => (props.isSelected ? "100%" : "0%")});
`;
