import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/actions/expenseAction";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="top-fold mt-3">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="search-bar">
            <i className="bi bi-search"></i>
            <input
              type="text"
              value={query}
              placeholder="Search for expense"
              onChange={handleChange}
            />
          </div>
          <div className="add-btn">
            <Link to="/add-expense">
              <i className="bi bi-plus-circle"></i>Add
            </Link>
          </div>
        </div>
      ) : (
        <div className="add-topfold ">
          <Link to="/">
            <div className="add-topfold-btn">
              <i className="bi bi-caret-left"></i>Back
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-btn">
              <i className="bi bi-x-circle"></i>Cancel
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
