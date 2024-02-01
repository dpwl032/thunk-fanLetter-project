import React from "react";
import Item from "./Item";

function List() {
  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          width: "1200px",
          height: "300px",
        }}
      >
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
      </div>
    </>
  );
}

export default List;
