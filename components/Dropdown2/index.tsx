import React, { useState } from "react";

function DropdownWithInput() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showInputBox, setShowInputBox] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3"];

  function handleOptionClick(option: string) {
    setSelectedOption(option);
    setShowInputBox(true);
  }

  return (
    <div>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option} onClick={() => handleOptionClick(option)}>
            {option}
          </option>
        ))}
      </select>
      {showInputBox && <input type="text" />}
    </div>
  );
}

export default DropdownWithInput;