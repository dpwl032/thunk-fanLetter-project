import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Form from "./Form";
import List from "./List";
import Item from "./Item";

function Layout() {
  return (
    <div>
      <h2>안녕하세요</h2>
      <Header />
      <Nav />
      <Form />
      <List />
      <Item />
    </div>
  );
}

export default Layout;
