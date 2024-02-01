import React from "react";
import { fakeDate } from "shared/DummyData";

function Item() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default Item;
