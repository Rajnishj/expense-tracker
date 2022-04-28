import {
  ADD_EXPENSES,
  DELETE_EXPENSES,
  SEARCH_EXPENSES,
} from "../actions/types";

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expense = [];
  if (list) {
    expense = JSON.parse(list);
  }
  return expense;
};
const initialState = {
  expenseList: initialList(),
  query: "",
};

export const expenseReducerLocal = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSES:
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expenseList, action.payload])
      );
      return {
        ...state,
        expenseList: [...state.expenseList, action.payload],
      };
    case DELETE_EXPENSES:
      localStorage.setItem(
        "expense-list",
        JSON.stringify(
          state.expenseList.filter((item) => item.createdAt !== action.payload)
        )
      );
      return {
        ...state,
        expenseList: state.expenseList.filter(
          (item) => item.createdAt !== action.payload
        ),
      };
    case SEARCH_EXPENSES:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};
