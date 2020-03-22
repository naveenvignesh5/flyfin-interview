import { combineReducers } from "redux";

// reducers
import fetch from "./fetch";
import currency from "./currency";

const rootReducer = combineReducers({
  fetch,
  currency
});

export default rootReducer;
