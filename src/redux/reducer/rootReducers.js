import { combineReducers } from "redux";

import todoReducer from "./reducer-todo";
import authReduer from "./reducer-auth";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReduer
});

export default rootReducer;
