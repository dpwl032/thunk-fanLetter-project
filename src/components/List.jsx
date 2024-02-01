import React from "react";
import Item from "./Item";
import styled from "styled-components";

const StList = styled.div`
  border: 1px solid blue;
  width: 800px;
  height: 300px;
`;

function List() {
  return (
    <>
      <StList>
        List 영역입니다
        <ul>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
        </ul>
      </StList>
    </>
  );
}

export default List;
