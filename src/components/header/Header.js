import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="container">
      <div className="col-sm-12 col-md-8 mt-3 m-auto header-sec">
        <div className="logo">
          Xpensr <i className="bi bi-credit-card"></i>
        </div>
        <div className="header-btn">
          <a
            className="bttn"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
