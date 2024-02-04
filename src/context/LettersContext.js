import { createContext, useState } from "react";

export const LettersContext = createContext();

const LetterProvider = ({ children }) => {
  return (
    <LettersContext.Provider value={{}}>{children}</LettersContext.Provider>
  );
};

export default LetterProvider;
