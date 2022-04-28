import React from "react";
import ExpenseList from "../../components/expenseList/ExpenseList";

import TopFold from "../../components/topFold/TopFold";
import "./home.scss";
const Home = () => {
  return (
    <div className="container">
      <div className="col-md-8 m-auto">
        <TopFold />
        <ExpenseList />
      </div>
    </div>
  );
};

export default Home;
