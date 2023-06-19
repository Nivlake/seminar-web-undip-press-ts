import React, { useState } from 'react';

interface DropdownProps {
  choices: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ choices }) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(false);

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
    setShowInput(true);
  };

  return (
    <div>
      <select onChange={(e) => handleChoiceClick(e.target.value)}>
        <option value="">Select an option</option>
        {choices.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>
      {showInput && (
        <div>
          <input type="text" placeholder={`Enter ${selectedChoice}`} />
        </div>
      )}
    </div>
  );
};