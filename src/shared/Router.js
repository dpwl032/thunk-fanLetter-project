import { BrowserRouter, Route, Routes } from "react-router-dom";
import LettersLayout from "components/LettersLayout";
import Detail from "Pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LettersLayout />} />
        <Route path="navi/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
