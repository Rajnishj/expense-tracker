import React from "react";
import Dropdown from "./topFold/Dropdown";

const InputField = () => {
  return (
    <div className="col-md-8 m-auto mt-5">
      <div className="input-field">
        <div className="input-sec">
          <input type="text" placeholder="Enter amount" />
          <span>INR</span>
        </div>
        <div className="dropdown-sec">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default InputField;
