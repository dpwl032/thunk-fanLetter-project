import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LettersContext } from "context/LettersContext";
import proImg from "assets/9720037.jpg";

function Item() {
  const { name, letters, setLetters } = useContext(LettersContext);

  const filteredLetters = letters.filter((data) => {
    return data.writedTo == name;
  });

  console.log(letters);

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
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
                    <ProfileImg>
                      <img
                        src={null ?? proImg}
                        alt="프로필이미지입니다"
                        style={{ width: "150px", borderRadius: "100px" }}
                      />
                    </ProfileImg>

                    <LetterItem>
                      <div> {data.nickname}</div>
                      <div>
                        <LengthLimit>{data.content}</LengthLimit>
                      </div>
                      <div style={{ color: "gray" }}>{data.createdAt}</div>
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

const StItemUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const StItemLi = styled.li`
  width: 560px;
  height: 200px;
  text-align: center;
  border-radius: 15px;
  background-color: white;
`;

const LetterItems = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProfileImg = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LetterItem = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

//말줄임 표시 처리방법
const LengthLimit = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
