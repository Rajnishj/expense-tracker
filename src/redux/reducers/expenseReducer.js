import {
  ADD_EXPENSES,
  DELETE_EXPENSES,
  SEARCH_EXPENSES,
} from "../actions/types";

const initialState = {
  expenseList: [],
  query: "",
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSES:
      return {
        ...state,
        expenseList: [...state.expenseList, action.payload],
      };
    case DELETE_EXPENSES:
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
