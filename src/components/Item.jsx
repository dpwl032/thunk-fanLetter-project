import React from "react";
import { fakeDate } from "shared/DummyData";
import styled from "styled-components";

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
function Item() {
  return (
    <>
      <StItemUl>
        {fakeDate.map((data) => {
          return (
            <StItemLi>
              <LetterItems key={data.id}>
                <ProfileImg>이미지</ProfileImg>
                <LetterItem>
                  <p> {data.nickname}</p>
                  <br />
                  <p>{data.createdAt}</p>
                  <br />
                  <p>{data.content}</p>
                  <br />
                </LetterItem>
              </LetterItems>
            </StItemLi>
          );
        })}
      </StItemUl>

      {/* <div>
        {fakeDate.map((data) => {
          return (
            <div key={data.id}>
              {data.nickname}
              <br />
              {data.createdAt}
              <br />
              {data.content}
              <br />
              <br />
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default Item;
