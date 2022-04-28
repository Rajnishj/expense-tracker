import { combineReducers } from "redux";
import { expenseReducerLocal } from "./expenseReducerLocal";
// import { expenseReducer } from "./expenseReducer";

export default combineReducers({
  // expense: expenseReducer,
  expense: expenseReducerLocal,
});
