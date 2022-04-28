import React, { useState } from "react";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Choose any");
  const options = [
    { id: 1, title: "React" },
    { id: 2, title: "Angular" },
    { id: 3, title: "Vue" },
  ];
  console.log(options);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected} <i className="bi bi-caret-down-fill"></i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map(({ id, title }) => (
            <div
              key={id}
              onClick={(e) => {
                setSelected(title);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
