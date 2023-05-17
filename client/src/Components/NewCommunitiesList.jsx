import CommunityCard from "./CommunityCard";
import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewCommunitiesList = () => {

  const navigate = useNavigate();

  const [communities, setCommunities] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8080/get-communities')

      .then((response) => {
      
        setCommunities(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOnClick = (index) => {

    console.log(index);
    navigate(`/community/${index}`);
  }
  
  return (
    <div className="container mx-auto py-8 flex flex-row justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-14 w-[80%] h-[60%]">
        {communities.map((community, index) => (
          <CommunityCard
            title={community.title} 
            image = {community.image}
            members={community.members}
            description={community.description}
            bg = {community.bg}
            handleOnClick = {() => handleOnClick(index+1)}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCommunitiesList;

