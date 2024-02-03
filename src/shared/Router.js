import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import LettersNav from "components/LettersNav";
import Home from "pages/Home";
import LettersLayout from "components/LettersLayout";
import Item from "components/Item";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LettersLayout />} />
        <Route path="item" element={<Item />} />
        <Route path="navi/:id" element={<Detail />} />
        <Route path="detail" element={<Detail />} />
        {/* <Route path="home" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
