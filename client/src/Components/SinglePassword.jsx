import React from "react";

const SinglePassword = ({htmlFor, text, name, id, type, placeholder}) => {

    return (
        <div className="mb-4 flex gap-2">
            <div className="w-full">
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
            
        </div>
    )
};

export default SinglePassword;