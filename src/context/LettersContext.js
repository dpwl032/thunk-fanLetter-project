import { createContext, useState } from "react";
import { fakeData } from "shared/DummyData";

export const LettersContext = createContext();

const LetterProvider = ({ children }) => {
  const [name, setName] = useState("카리나");
  const [letters, setLetters] = useState([...fakeData]);
  const [click, setClick] = useState(false);

  const onSubmitLetter = (nextLetter) => {
    setLetters((prevLetter) => [nextLetter, ...prevLetter]);
  };

  const onclickHandler = (who) => {
    setName(who);
  };
  //수정내용 state

  return (
    <LettersContext.Provider
      value={{
        name,
        setName,
        letters,
        setLetters,
        click,
        setClick,
        onSubmitLetter,
        onclickHandler,
      }}
    >
      {children}
    </LettersContext.Provider>
  );
};

export default LetterProvider;
