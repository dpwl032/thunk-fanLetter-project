import { createContext, useState } from "react";
import { fakeData } from "shared/DummyData";

export const LettersContext = createContext();

//바뀌지 않을 정적인 데이터는 컴포넌트의 바깥에서 선언하기
const celebrityList = ["지젤", "카리나", "윈터", "닝닝"];

const LetterProvider = ({ children }) => {
  //styled
  // 이름을 넣으면 체크 후 누군지 리턴한다
  const celebrityJob = (who) => {
    switch (who) {
      case "지젤":
        return "지젤";
      case "카리나":
        return "카리나";
      case "윈터":
        return "윈터";
      case "닝닝":
        return "닝닝";
      default:
        return "연예인이 아닙니다";
    }
  };

  //Nav 전역관리
  const [name, setName] = useState("카리나");

  //select관리
  const [writedTo, setWritedTo] = useState("지젤");

  //fake Data 오류
  // const [letters, setLetters] = useState([...fakeData]);
  const [letters, setLetters] = useState(
    JSON.parse(localStorage.getItem("letters")) ?? [...fakeData]
  );

  const onSubmitLetter = (nextLetter) => {
    setLetters((prevLetter) => [nextLetter, ...prevLetter]);

    localStorage.setItem("letters", JSON.stringify([nextLetter, ...letters]));
  };

  const onclickHandler = (who) => {
    setName(who);
  };

  //Form 전역관리
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //select onChane & value로 변경
  const onChangeName = (e) => {
    setWritedTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //select onChane & value로 변경
    const nickname = e.target.nickname.value;
    const content = e.target.content.value;

    if (!nickname || !content) {
      alert("빈칸없이 내용을 입력해주세요!");
      return;
    }

    if (nickname.length >= 20) {
      alert("20글자를 초과할 수 없습니다");
      nickname.current.focus();
      return;
    }

    if (content.length >= 100) {
      alert("100글자를 초과할 수 없습니다");
      return;
    }

    onSubmitLetter({
      createdAt: dateString,
      nickname,
      id: crypto.randomUUID(),
      content,
      writedTo,
    });
    e.target.reset();
  };

  //detail
  const modifyLetter = (e) => {
    setClick(!click);
  };
  const [click, setClick] = useState(false);

  //전역관리하는 요소들 뿌려주기
  return (
    <LettersContext.Provider
      value={{
        celebrityList,
        celebrityJob,
        name,
        setName,
        letters,
        setLetters,
        onSubmitLetter,
        onclickHandler,
        today,
        dateString,
        handleSubmit,
        modifyLetter,
        click,
        setClick,
        writedTo,
        setWritedTo,
        onChangeName,
      }}
    >
      {children}
    </LettersContext.Provider>
  );
};

export default LetterProvider;
