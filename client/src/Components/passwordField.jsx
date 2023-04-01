import React from "react";

const PasswordField = ({htmlFor, text, name, id, type, placeholder}) => {

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
                />
            </div>
        </div>
    )
};

export default PasswordField;