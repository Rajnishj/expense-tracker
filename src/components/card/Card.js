import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenseAction";

const Card = ({ item, successToast }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  return (
    <div
      className="card-sec col-md-8 col-sm-12"
      style={{ borderRight: `5px solid ${item.category.color}` }}
    >
      <div className="card-container-left">
        <div className="card-img-container">
          <img src={item.category.icon} alt={item.category.title} />
        </div>
        <div className="card-info">
          <label>{item.title}</label>
          <br />
          <label className="time">{time}</label>
        </div>
      </div>
      <div className="card-container-right">
        <i
          onClick={() => {
            dispatch(deleteExpense(item.createdAt));
            successToast();
          }}
          className="bi bi-trash"
        ></i>
        <br />
        <label>₹ {item.amount}</label>
      </div>
    </div>
  );
};

export default Card;
