import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Form from "./Form";
import List from "./List";
import Item from "./Item";

function Layout() {
  return (
    <>
      <div
        style={{
          border: "2px solid red",
          width: "1300px",
          height: "270px",
        }}
      >
        Layout 부분입니다
        <div>
          <Header />
          <Nav />
          <Form />
          <List />
        </div>
      </div>
    </>
  );
}

export default Layout;
