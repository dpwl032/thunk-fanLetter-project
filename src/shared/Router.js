import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Detail from "../Pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
