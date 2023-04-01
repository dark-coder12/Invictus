import React from "react";

const InputField = ({htmlFor, text, name, id, type, placeholder}) => {

    return (
        <div className="mb-4">
            <label
            className="block font-bold mb-2"
            htmlFor={htmlFor}
            >
                {text}
            </label>
            <input
            className= {name}
            id= {id}
            type={type}
            placeholder={placeholder}
            />
          </div>
    )
};

export default InputField;