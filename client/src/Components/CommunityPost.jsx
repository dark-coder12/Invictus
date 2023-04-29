import React from "react";
import liked from '../Assets/pictures/liked.png';
import notliked from '../Assets/pictures/notliked.png';
import comments from '../Assets/pictures/comments.png';

const CommunityPost = ({ name, icon, description, date }) => {

  var like = false;
  var setComment = false;

  function changeLike () {

    var id = document.getElementById("like");

    if(!like){
      var id = document.getElementById("like");
      id.setAttribute('src', liked);
      like = true;
    }else{
      var id = document.getElementById("like");
     id.setAttribute('src', notliked);
     like = false;
    }
  }

  function openThread () {


    if(!setComment){
      document.getElementById('comment').innerText = "Add a comment...";
      setComment = true;
    }else{
      document.getElementById('comment').innerText = "";
      setComment = false;
    }
  }

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

      <div className="flex flex-row text-white font-[500] text-xs mt-3 w-6">
       <img className = 'mr-6' id='like' src = {notliked} onClick={changeLike}/>
       <img className='mt-[5%]' src = {comments} onClick={openThread}/>
      </div>
    
      <p id='comment' className='mt-3'></p>
    </div>
  );
};

export default CommunityPost;
