import React, { useState, useEffect } from 'react';
import axios from 'axios';
import liked from '../Assets/pictures/liked.png';
import notliked from '../Assets/pictures/notliked.png';
import comments from '../Assets/pictures/comments.png';

const CommunityPost = ({ name, icon, description, date }) => {
  const [like, setLike] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  const uID = localStorage.getItem('userID');
  
  const changeLike = () => {
    if (!like) {
      axios
        .post('http://localhost:8080/like-post', {
          userID: uID,
          name,
          icon,
          description,
          date,
        })
        .then((response) => {
          console.log('Post liked:', response.data);
          setLike(true);
          setNumLikes(numLikes + 1);
        })
        .catch((error) => {
          console.error('Error liking post:', error);
        });
    } else {
      axios
        .delete('http://localhost:8080/unlike-post', {
          data: {
            userID: uID,
            name,
            icon,
            description,
            date,
          },
        })
        .then((response) => {
          console.log('Post unliked:', response.data);
          setLike(false);
          setNumLikes(numLikes - 1);
        })
        .catch((error) => {
          console.error('Error unliking post:', error);
        });
    }
  };


  useEffect(() => {
   
    axios
      .get('http://localhost:8080/post-likes', {
        params: {
          name,
          icon,
          description,
          date,
        },
      })
      .then((response) => {
        setNumLikes(response.data.likes);
      })
      .catch((error) => {
        console.error('Error fetching post likes:', error);
      });
  }, []);

  return (
    <div className="bg-[#000010] text-opacity-80 border-white border-2 shadow-md rounded-lg p-4 text-white w-[30rem] h-min">
      <div className="flex items-center mb-4 text-black text-opacity-80">
        <img
          src={icon}
          alt="Author Icon"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-white text-opacity-80 font-[300] text-xs">
            {name} - {date}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 text-justify text-white">
        <p className="font-[500] text-xs">{description}</p>
      </div>

      <hr className="border-b-1 border-gray-900 mt-3"></hr>

      <div className="flex flex-row text-white font-[500] text-xs mt-3 w-6">
        <img
          className="mr-6"
          id="like"
          src={like ? liked : notliked}
          onClick={changeLike}
          alt="Like Button"
        />
        
        <p className="ml-2 text-xs text-gray-300 flex flex-row w-full">{numLikes} Likes</p>
      </div>

      <p id="comment" className="mt-3"></p>
    </div>
  );
};

export default CommunityPost;
