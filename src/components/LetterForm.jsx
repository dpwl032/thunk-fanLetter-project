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
        <div> 에스파에게 팬레터를 보내주세요!</div>

        <form onSubmit={handleSubmit}>
          <div>
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
          </div>

          <div>
            <label>내용 :</label>
            <TextArea
              name="content"
              type="text"
              placeholder="최대 100자까지 작성할 수 있습니다."
              style={{
                width: "300px",
                height: "150px",
              }}
            />
          </div>
          <div>
            <select name="writedTo">
              <option value="카리나">카리나</option>
              <option value="지젤">지젤</option>

              <option value="닝닝">닝닝</option>
              <option value="윈터">윈터</option>
            </select>
            <button>팬래터 등록</button>
          </div>
        </form>
      </StForm>
    </>
  );
}

export default LetterForm;

const TextArea = styled.textarea`
  resize: none;
  width: 350px;
  height: 170px;
`;
