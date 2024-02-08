import styled from "styled-components";
import { LettersContext } from "context/LettersContext";
import { useContext } from "react";

const StForm = styled.div`
  background-color: black;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Toaespa = styled.div`
  background-color: black;
  width: 900px;
  color: white;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputAndBtn = styled.form`
  width: 900px;

  height: 85%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const InputFormSt = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextFormSt = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ExportForm = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LetterForm() {
  //context Api
  const { handleSubmit, today, dateString } = useContext(LettersContext);

  return (
    <>
      <StForm>
        <Toaespa>에스파에게 내용을 작성해주세요!</Toaespa>
        <InputAndBtn onSubmit={handleSubmit}>
          <InputFormSt>
            닉네임 : &nbsp;
            <input
              name="nickname"
              type="content"
              placeholder="최대 20글자까지 작성할 수 있습니다."
              style={{
                width: "290px",
                height: "20px",
              }}
            />
          </InputFormSt>
          <TextFormSt>
            내용 : &nbsp;
            <textarea
              name="content"
              type="text"
              placeholder="최대 100자까지 작성할 수 있습니다."
              style={{
                width: "300px",
                height: "150px",
                resize: "none",
              }}
            />
          </TextFormSt>
          <ExportForm>
            <select name="writedTo">
              <option value="카리나">카리나</option>
              <option value="지젤">지젤</option>
              <option value="닝닝">닝닝</option>
              <option value="윈터">윈터</option>
            </select>
            <button>전송하기</button>
          </ExportForm>
        </InputAndBtn>
      </StForm>
    </>
  );
}

export default LetterForm;
