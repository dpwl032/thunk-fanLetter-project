import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "Pages/Home";
import Detail from "Pages/Detail";
import MyPage from "Pages/MyPage";
import Login from "Pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        {/* 로그인했을때 */}
        <Route path="/" element={<Home />} />
        <Route path="navi/:id" element={<Detail />} />
        <Route path="my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
