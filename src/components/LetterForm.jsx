import styled from "styled-components";
import { LettersContext } from "context/LettersContext";
import { useContext } from "react";

const StForm = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid black;
`;

function LetterForm() {
  //context Api
  const { handleSubmit, today, dateString } = useContext(LettersContext);

  return (
    <>
      <StForm>
        Form 영역입니다.
        <br />
        <form onSubmit={handleSubmit}>
          <label>닉네임 :</label>
          <input
            name="nickname"
            type="content"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            style={{
              width: "250px",
              height: "20px",
            }}
          />
          <br />
          <br />
          <label>내용 :</label>
          <textarea
            name="content"
            type="text"
            placeholder="최대 100자까지 작성할 수 있습니다."
            style={{
              width: "300px",
              height: "150px",
            }}
          />
          <br />
          <br />
          누구에게 보내실건가요? <br />
          <select name="writedTo">
            <option value="카리나">카리나</option>
            <option value="지젤">지젤</option>

            <option value="닝닝">닝닝</option>
            <option value="윈터">윈터</option>
          </select>
          <button>팬래터 등록</button>
        </form>
      </StForm>
    </>
  );
}

export default LetterForm;
