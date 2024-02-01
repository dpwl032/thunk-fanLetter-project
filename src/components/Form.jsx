import React from "react";
import styled from "styled-components";

const StForm = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid black;
`;

function Form() {
  return (
    <>
      <StForm>
        Form 영역입니다.
        <br />
        <form>
          <label>닉네임 :</label>
          <input type="text" /> <br />
          <label>내용 :</label>
          <input type="text" />
          <br />
          누구에게 보내실건가요? <br />
          <select name="entertainer" id="enter">
            <option value="singer">가수</option>
            <option value="actor">배우</option>
            <option value="comedian">개그맨</option>
          </select>
          <button>팬래터 등록</button>
        </form>
      </StForm>
    </>
  );
}

export default Form;
