import React, { useState } from "react";
import classNames from "classnames";

const Post = () => {
  const [postText, setPostText] = useState("");

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPostText("");
  };

  const textAreaClasses = classNames(
    "w-full px-3 py-2 text-gray-100 border rounded-lg focus:outline-none bg-black",
    {
      "h-40": postText.split("\n").length <= 3,
      "h-32": postText.split("\n").length > 3,
    }
  );

  return (
    <div className="flex flex-col bg-black shadow-md rounded-lg p-4">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className={textAreaClasses}
          placeholder="Blog it down."
          value={postText}
          onChange={handlePostChange}
        />
        <div className="flex justify-between items-center ">
          <div className="flex ">
            <button
              className="text-xs ml-2 px-2 mt-3 py-1 text-white rounded-lg hover:text-lg focus:outline-none"
              type="submit"
            >
              Post
            </button>
          </div>
          <div className="flex">
            <button
              className="mt-3 text-xs ml-2 px-2 py-1 text-white rounded-lg hover:text-lg focus:outline-none"
              type="submit"
            >
              Add Details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Post;
