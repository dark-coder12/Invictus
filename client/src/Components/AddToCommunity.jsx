import React, { useState } from 'react';
import classNames from 'classnames';

const AddToCommunity = () => {

  const [postText, setPostText] = useState('');

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
          setPostText('');
  };

  const textAreaClasses = classNames('w-full px-3 py-2 text-gray-100 border bg-[#000010] rounded-lg focus:outline-none bg-black', {
    'h-40': postText.split('\n').length <= 3,
    'h-32': postText.split('\n').length > 3,
  });

    return(
      
    <div className="flex flex-col bg-[#000000] shadow-md rounded-lg  mt-0 mb-6 ">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className={textAreaClasses}
          placeholder="Post in Community!"
          value={postText}
          onChange={handlePostChange}
        />
        <div className="flex justify-between items-center ">
          <div className="flex ">
            <button className="text-sm ml-2 px-2 w-[5rem] h-[1.5rem] mt-3 py-1 text-white bg-[#3a0303] hover:bg-[#2B0202] rounded-lg focus:outline-none" type="submit">
              Post
            </button>
          </div>
          <div className="flex">
          <button className="mt-3 text-xs ml-2 px-2 w-[5rem] h-[1.5rem] py-1 text-white bg-[#3a0303] hover:bg-[#2B0202] rounded-lg focus:outline-none" type="submit">
              Attach
            </button>
           
          </div>
        </div>
      </form>
      </div>
    )
}

export default AddToCommunity