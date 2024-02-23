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
  const [selectedImage, setSelectedImage] = useState("카리나");

  const onclickHandler = (who) => {
    dispatch(nameSelect(who));
  };

  return (
    <>
      <StNav>
        <StUl>
          <AespaImg
            src={karina}
            name="카리나"
            onClick={() => onclickHandler("카리나")}
          />
          <AespaImg
            src={winter}
            name="윈터"
            onClick={() => onclickHandler("윈터")}
          />
          <AespaImg
            src={giselle}
            name="지젤"
            onClick={() => onclickHandler("지젤")}
          />
          <AespaImg
            src={ningning}
            name="닝닝"
            onClick={() => onclickHandler("닝닝")}
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

const StButton = styled.button`
  border: 1px solid black;
  width: 140px;
  height: 160px;
  border-radius: 20px;
  text-align: center;
`;

//이름을 배열에 담는다.

/*item style*/

const StItemUl = styled.ul`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  gap: 20px;
`;

const StItemLi = styled.li`
  width: 560px;
  height: 200px;
  text-align: center;
  border: 2px solid red;
  border-radius: 15px;
`;

const LetterItems = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProfileImg = styled.div`
  width: 30%;
`;

const LetterItem = styled.div`
  width: 70%;
`;

const AespaImg = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 20px;
  &:hover {
    filter: grayscale(100%);
  }
`;
