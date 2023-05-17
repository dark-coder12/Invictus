import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
const ExistingCommunities = () => {
  
    const navigate = useNavigate();
  
    const [userCommunities, setUserCommunities] = useState([]);
  
    useEffect(() => {
      const userID = localStorage.getItem('userID');
      console.log(userID)

      axios.get(`http://localhost:8080/get-user-communities/${userID}`)
  
        .then((response) => {
        
          setUserCommunities(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);


    return (
        <div className="h-full flex flex-col items-center rounded-r-md ">
          <div className="rounded-md  mt-10 h-[40%]">
            <div className="flex flex-row flex-wrap gap-8 p-5 items-center justify-center  rounded-md bgcheck  bg-opacity-20">
            <p>My Communities</p>
            <div className="text-lg flex flex-col gap-5 items-center justify-center pt-3 pl-10 pr-2">
            { userCommunities.map(community => (
                <div className="flex flex-row bg-black h-[7rem] w-[15rem] p-2 items-center justify-center rounded-md">
                <img src={userCommunities.bg} alt="pic" className="w-[60%] h-[60%] rounded-full"/>
                <p className="font-[20] text-sm justify-center ml-5 pr-10">{userCommunities.title}</p>
                </div>
            ))}
            </div>
            </div>
         </div>
        </div>
    )
}

export default ExistingCommunities