import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AuthLayout = () => {
  const [isRendered, setIsRendered] = useState(false);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

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
