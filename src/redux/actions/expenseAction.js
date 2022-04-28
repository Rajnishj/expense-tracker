import { ADD_EXPENSES, DELETE_EXPENSES, SEARCH_EXPENSES } from "./types";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSES,
    payload: data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSES,
    payload: data,
  };
};
export const searchExpense = (query) => {
  return {
    type: SEARCH_EXPENSES,
    payload: query,
  };
};
