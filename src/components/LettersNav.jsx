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
  // const name = useSelector((state) => state.name);

  //rtk
  const dispatch = useDispatch();

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
            selected={selectedAespa === "카리나"}
          />
          <AespaImg
            src={winter}
            onClick={() => onclickHandler("윈터")}
            selected={selectedAespa === "윈터"}
          />
          <AespaImg
            src={giselle}
            onClick={() => onclickHandler("지젤")}
            selected={selectedAespa === "지젤"}
          />
          <AespaImg
            src={ningning}
            onClick={() => onclickHandler("닝닝")}
            selected={selectedAespa === "닝닝"}
          />
        </StUl>
      </StNav>

      <StName>
        <StUlName>
          {celebrityList.map((who) => {
            return <AespaName key={who}>{who}</AespaName>;
          })}
        </StUlName>
      </StName>
      {/* Form 영역 */}
      <LetterForm />
      {/* Item 컴포넌트부분 */}
      <div style={{ backgroundColor: "black", color: "black" }}>
        div 간격띄우기
      </div>
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
  filter: grayscale(${(props) => (props.selected ? "100%" : "0%")});
`;

const AespaName = styled.span`
  color: white;
  fontweight: bolder;
`;
