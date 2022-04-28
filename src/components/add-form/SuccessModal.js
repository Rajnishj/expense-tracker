import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./sucessmodal.scss";
Modal.setAppElement("#root");
const SuccessModal = ({ isModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense added Successfully</label>
        <img
          src={require("../../assets/images/added-image.png")}
          alt="expense added"
          className="added-image"
        />
        <Link to="/">
          <div className="home-btn">
            <i className="bi bi-house"></i>Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
