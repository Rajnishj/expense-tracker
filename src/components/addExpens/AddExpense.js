import React from "react";
import AddForm from "../add-form/AddForm";
import TopFold from "../topFold/TopFold";

const AddExpense = () => {
  return (
    <div className="conatiner add-expense col-md-8 m-auto">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
