import React from "react";

const CommunityPost = ({ name, icon, description, date }) => {
  return (
    <div className="bg-[#000010] text-opacity-80 border-white border-2 shadow-md rounded-lg p-4 text-white w-[30rem]">
      <div className="flex items-center mb-4 text-black text-opacity-80">
        <img
          src={icon}
          alt="Author Icon"
          className="w-10 h-10 rounded-full mr-4 "
        />
        <div>          
          <p className="text-white text-opacity-80 font-[300] text-xs">
            {name} - {date}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 text-justify text-white">
        <p className="font-[500] text-xs ">{description}</p>
        
      </div>

      <hr className="border-b-1 border-gray-900 mt-3"></hr>

      <div className="flex flex-row text-white font-[500] text-xs mt-3">
       <p>heart</p>
       <p>like</p>
       <p>star</p>
      </div>
    </div>
  );
};

export default CommunityPost;
