import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import proImg from "assets/9720037.jpg";
import { __getLetter } from "../redux/modules/lettersSlice";
import { useEffect } from "react";
import { Dispatch } from "redux";
function Item() {
  //redux
  const name = useSelector((state) => state.name);

  //redux thunk
  const { letters } = useSelector((state) => state.letters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getLetter());
  }, [dispatch]);

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <StItemUl>
          {letters.map((data) => {
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

        {!letters.length ? (
          <NoneLetter>
            {" "}
            현재 작성된 편지가 없습니다. [{name}]에게 팬레터를 보내주세요!
          </NoneLetter>
        ) : (
          ""
        )}
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

const NoneLetter = styled.p`
  color: white;
  width: 100%;
  height: 200px;
  font-size: 45px;
  text-align: center;
  font-family: "Nanum Gothic", sans-serif;
`;
