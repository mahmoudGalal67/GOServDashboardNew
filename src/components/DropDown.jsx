import React, { useState } from "react";

const Dropdown = () => {
  // State to hold the selected value
  const [selectedValue, setSelectedValue] = useState("");

  // Handler for when the dropdown value changes
  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update the state with the selected value
  };

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChange}
        style={{
          padding: "8px",
          fontSize: "14px",
          border: "none",
          color:'#999',
          width: "92px",
          height:'38px',
          marginLeft:'8px',
        }}
      >
        <option value="option1">الطلبات</option>
        <option value="option2">المنتحات</option>
        <option value="option3">العملاء</option>
      </select>
    </div>
  );
};

export default Dropdown;
