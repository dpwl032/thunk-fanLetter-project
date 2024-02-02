import React from "react";

function Detail(props) {
  // console.log(JSON.parse(localStorage.getItem("카리나")));

  const a = JSON.parse(localStorage.getItem("카리나"));
  const b = JSON.parse(localStorage.getItem("윈터"));
  const c = JSON.parse(localStorage.getItem("지젤"));
  console.log(props);
  return <div></div>;
}

export default Detail;
