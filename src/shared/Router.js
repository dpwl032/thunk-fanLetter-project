import { BrowserRouter, Route, Routes } from "react-router-dom";
import LettersLayout from "components/LettersLayout";
import Item from "components/Item";
import Detail from "Pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LettersLayout />} />
        <Route path="item" element={<Item />} />
        <Route path="navi/:id" element={<Detail />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
