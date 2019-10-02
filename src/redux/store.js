import { createStore, applyMiddleware } from "redux";

//Middlewares
import ReduxThunk from "redux-thunk";
// import logger from "redux-logger";

//RootReducer
import reducers from "./reducer/rootReducers";

const middlewares = applyMiddleware(
  ReduxThunk
  // logger
);

const store = createStore(reducers, middlewares);

export default store;
