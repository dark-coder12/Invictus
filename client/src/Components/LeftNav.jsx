import React, {useState, useEffect} from "react";

import SpotifyPlayer from "../Components/SpotifyPlayer";
import invLogo from "../Assets/pictures/maroonLogo.png";
import profileLogo from "../Assets/pictures/profile.png";

import people from "../Assets/pictures/people.png";
import connect from "../Assets/pictures/connect.png";

import headphone from "../Assets/pictures/maroonH.png";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const LeftNav = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();
  
  useEffect(() => {
   
    const userID = localStorage.getItem('userID');
 
    axios.post('http://localhost:8080/home', { userID })
    .then(response => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
    })
    .catch(error => {
    });

  }, []);

  return (
    <div className="bg-[#020202] h-full flex flex-col justify-between rounded-l-md">
      <div>
        <div className="flex justify-center gap-1 w-full pt-5">
          <img src={invLogo} className="w-32 pb-10" />
        </div>
        <div onClick={()=> navigate('/home')} className="flex items-center pb-2 pt-2 hover:bg-none hover:bg-opacity-50 gradientHover cursor-pointer hover:font-[600] pl-[15%]">
          <img src={profileLogo} className="w-4" />
          <span className="ml-2">Home</span>
        </div>
        <div onClick={()=> navigate('/all-communities')} className="flex items-center pb-2 pt-2 hover:bg-none hover:bg-opacity-50 gradientHover cursor-pointer pl-[15%]">
          <img src={people} className="w-4" />
          <span className="ml-2" >Community</span>
        </div>
        <div onClick={()=> navigate('/all-connections')} className="flex items-center pb-2 pt-2 hover:bg-none hover:bg-opacity-50 gradientHover cursor-pointer pl-[15%]">
          <img src={connect} className="w-4" />
          <span className="ml-2">Connect</span>
        </div>
      </div>

      <div className="w-8 rounded-lg w-full flex flex-col justify-center items-center gap-5">
        <img className="shadow-lg w-[50%]" src={headphone} />

        <p>Music </p>
        <SpotifyPlayer />
      </div>

      <div className="flex flex-row justify-center items-center pb-[10%] gap-3" onClick={()=>navigate('/profile')}>
        <img className="rounded-3xl w-8" src={localStorage.getItem('imgUrl')} />
        <p>{firstName} {lastName}</p>
      </div>
    </div>
  );
};

export default LeftNav;
