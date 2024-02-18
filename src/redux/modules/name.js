//action value
const NAME_SELECT = "member/NAME_SELECT";
//action creator
export const nameSelect = (payload) => {
  return {
    type: NAME_SELECT,
    payload,
  };
};

const initialState = "카리나";

//리듀서
const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_SELECT:
      const selectedName = action.payload;
      return selectedName;
    default:
      return state;
  }
};

export default nameReducer;
