import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categories } from "../../constants/dropdownData";
import { addExpense } from "../../redux/actions/expenseAction";
import SuccessModal from "./SuccessModal";
import "./addForm.scss";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setIsCategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please Enter valid data!");
      notify();
      return;
    }
    const data = {
      title,
      category,
      amount,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setIsModalOpen(true);
  };
  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal isModalOpen={isModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input type="text" value={amount} onChange={handleAmount} />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <label>{category ? category.title : "category"}</label>
            <i className="bi bi-chevron-down"></i>
          </div>
          {isCategoryOpen && (
            <div className="category-container">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-btn">
        <button onClick={handleSubmit}>
          <label>Add</label>
          <i className="bi bi-flower1"></i>
        </button>
      </div>
    </div>
  );
};

export default AddForm;
