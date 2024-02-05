import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LettersContext } from "context/LettersContext";

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

//말줄임 표시 처리방법
const LengthLimit = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
function Item() {
  const { name, letters, setLetters } = useContext(LettersContext);

  const filteredLetters = letters.filter((data) => {
    return data.writedTo == name;
  });

  console.log(letters);

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <StItemUl>
          {filteredLetters.map((data) => {
            return (
              <StItemLi key={data.id}>
                <Link
                  to={`/navi/${data.id}`}
                  letters={letters}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <LetterItems>
                    <ProfileImg>이미지</ProfileImg>
                    <LetterItem>
                      <p> {data.nickname}</p>
                      <br />
                      <p>{data.createdAt}</p>
                      <br />
                      <LengthLimit>{data.content}</LengthLimit>
                      <br />
                    </LetterItem>
                  </LetterItems>
                </Link>
              </StItemLi>
            );
          })}
        </StItemUl>
        {!filteredLetters.length ? <p>내용이없어영</p> : ""}
      </div>
    </>
  );
}

export default Item;
