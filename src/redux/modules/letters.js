import { fakeData } from "shared/DummyData";

//action value
const ADD_LETTER = "letter/ADD_LETTER";
const DELETE_LETTER = "letter/DELETE_LETTER";
const EDIT_LETTER = "letters/EDIT_LETTER";

//action creator
export const addLetter = (payload) => {
  return {
    type: ADD_LETTER,
    payload,
  };
};

export const deleteLetterItem = (payload) => {
  return {
    type: DELETE_LETTER,
    payload,
  };
};

export const editLetter = (payload) => {
  return {
    type: EDIT_LETTER,
    payload,
  };
};

//초기값
const initialState = fakeData;

//reducer
const lettersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      const nextLetter = action.payload;
      return [nextLetter, ...state];

    case DELETE_LETTER:
      const deletedLetter = state.filter((item) => item.id !== action.payload);
      return deletedLetter;

    case EDIT_LETTER:
      let { editContent, id } = action.payload;
      const editedLetter = state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editContent };
        } else {
          return letter;
        }
      });
      return editedLetter;
    default:
      return state;
  }
};

export default lettersReducer;
