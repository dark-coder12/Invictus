import React from "react";

const ConnectionPost = ({ blogName, authorName, date, icon, image, text }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-black text-opacity-80">
      <div className="flex items-center mb-4 text-black text-opacity-80">
        <img
          src={icon}
          alt="Author Icon"
          className="w-10 h-10 rounded-full mr-4 "
        />
        <div>
          <h2 className="text-lg font-bold text-black text-opacity-80">
            {blogName}
          </h2>
          <p className="text-black text-opacity-80 font-[300] text-xs">
            {authorName} - {date}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 text-justify">
        <p className="font-[500] text-xs">{text}</p>
        <img
          src={image}
          alt="Post Image"
          className="w-[100%] rounded-md mb-4"
        />
      </div>

      <hr className="border-b-1 border-gray-900"></hr>
    </div>
  );
};

export default ConnectionPost;
