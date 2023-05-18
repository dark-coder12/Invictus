import React, { useState } from 'react';
import classNames from 'classnames';

const AddToCommunity = ({isUserJoined, addPostInCommunity}) => {

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
       
        { isUserJoined ?  <div className="flex flex-col justify-between items-center ">
       
        <textarea
          className={textAreaClasses}
          placeholder="Post in Community!"
          value={postText}
          onChange={handlePostChange}
        />
       <button className="text-sm ml-2 px-2 mt-3 py-1 text-white bg-[#3a0303] rounded-lg " onClick = {() => addPostInCommunity(postText)}>Post</button>
        </div> :
         <p className="text-sm ml-2 px-2 mt-3 py-1 text-white bg-[#3a0303] rounded-lg text-center">
        Join this community first to post!
       </p>
        }
      </form>
      </div>
    )
}

export default AddToCommunity