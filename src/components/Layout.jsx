import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Form from "./Form";
import List from "./List";
import Item from "./Item";
import styled from "styled-components";

const StLayout = styled.div`
  width: 100%;
  height: 270px;
  border: 2px solid red;
  background-color: pink;
`;

function Layout() {
  return (
    <>
      <StLayout>
        Layout 부분입니다
        <div>
          <Header />
          <Nav />
          <Form />
          <List />
        </div>
      </StLayout>
    </>
  );
}

export default Layout;
