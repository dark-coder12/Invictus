import React, { useState, useEffect } from "react";

const MCQ = ({ question, options, answer, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
  }, [question]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    onOptionSelect();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8">{question}</h2>
      <div className="flex flex-col space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`${
              selectedOption === index
                ? "bg-[#3a0303] text-white"
                : "bg-white text-gray-800"
            } hover:bg-black hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MCQ;
