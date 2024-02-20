import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  const [isRendered, setIsRendered] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // 토큰이 없는 경우 강제 routing
    if (!token) {
      //   navigator.replace("/login");
      navigator("/login");
    }

    // 컴포넌트 렌더링!!!
    setIsRendered(true);
  }, [isRendered]);

  if (!isRendered) {
    return;
  }

  return (
    <div>
      {/* 하위컴포넌트들이 렌더링됨 => home,myPage,detail*/}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
