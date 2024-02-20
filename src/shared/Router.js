import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "Pages/Home";
import Detail from "Pages/Detail";
import MyPage from "Pages/MyPage";
import Login from "Pages/Login";
import NonAuthLayout from "./NonAuthLayout";
import AuthLayout from "./AuthLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*로그인안했을 때*/}
        <Route element={<NonAuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        {/* 로그인했을때 */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="navi/:id" element={<Detail />} />
          <Route path="my" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
