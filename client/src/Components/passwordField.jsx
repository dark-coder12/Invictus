import React from "react";

const PasswordField = ({ htmlFor, text, name, id, type, placeholder, value1, value2, onChange1, onChange2 }) => {
  return (
    <div className="mb-4 flex gap-2">
      <div className="w-1/2">
        <label className="block font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className={name}
          id="password"
          type={type}
          placeholder={placeholder}
          value={value1}
          onChange={onChange1}
        />
      </div>
      <div className="w-1/2">
        <label className="block font-bold mb-2" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className={name}
          id="confirmPassword"
          type={type}
          placeholder={placeholder}
          value={value2}
          onChange={onChange2}
        />
      </div>
    </div>
  );
};

export default PasswordField;
