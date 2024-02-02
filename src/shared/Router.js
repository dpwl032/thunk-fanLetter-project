import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import LettersNav from "components/LettersNav";
import Home from "pages/Home";
import LettersLayout from "components/LettersLayout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LettersLayout />} />
        <Route path="navi" element={<LettersNav />} />
        <Route path="navi/:id" element={<Detail />} />
        <Route path="detail" element={<Detail />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
