import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Detail from "pages/Detail";
import Home from "pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="detail" element={<Detail />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
