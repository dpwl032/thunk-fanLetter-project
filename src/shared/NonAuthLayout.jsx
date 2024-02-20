import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const NonAuthLayout = () => {
  // 만약에 로그인이 되어있는 경우!!!
  // => (1) 메인 페이지로 이동 시켜줌
  const [isRendered, setIsRendered] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log("테스트입미다.", token);
    if (token) {
      //   navigator.push("/");
      navigator("/");
      setIsRendered(true);
    }
  }, [isRendered]);

  return (
    <div>
      {/* 하위컴포넌트들이 렌더링됨 =>login*/}
      <Outlet />
    </div>
  );
};

export default NonAuthLayout;
