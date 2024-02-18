import { createStore, combineReducers } from "redux";
import lettersReducer from "../modules/letters";
import nameReducer from "../modules/name";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  letters: lettersReducer,
  name: nameReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
