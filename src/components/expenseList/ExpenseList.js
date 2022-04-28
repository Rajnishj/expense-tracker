import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "../card/Card";
import "./expenseList.scss";

const ExpenseList = () => {
  const lists = useSelector((state) => state.expense.expenseList);
  const query = useSelector((state) => state.expense.query);
  // const filterData = lists.filter((item) => item.title.includes(query));
  const filterData = lists.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(query.toLowerCase());
  });
  const successToast = () => toast.success("Expense deleted successfully");
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {Object.keys(filterData).length === 0 ? (
        <div className="empty-img col-sm-12 col-md-5 m-auto">
          <img src={require("../../assets/images/empty.png")} alt="Loading" />
          <label>Uh Oh! your expense list is empty</label>
        </div>
      ) : (
        filterData.map((item) => (
          <Card key={item.createdAt} successToast={successToast} item={item} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
