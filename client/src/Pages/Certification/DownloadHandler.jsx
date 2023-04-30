import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import DownloadCertificate from "../../Components/DownloadCertificate";
import { options } from "../../Assets/code/options";

import { useNavigate } from 'react-router-dom';
   
import axios from "axios";

const DownloadHandler = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const navigate = useNavigate();

    const handleToCertifications = () => {
    navigate('/all-certifications');
  }

    useEffect(() => {
      const userID = localStorage.getItem('userID');
    
      axios.post('http://localhost:8080/home', { userID })
        .then(response => {
  
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
        })
        .catch(error => {
          console.error(error);
        });
  
    }, []);

    
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[80%] pl-10  overflow-y-auto scrollbar-thumb-transparent scrollbar-track-transparent">
         
       
            <div className="pl-[3%]">
                <DownloadCertificate name={firstName + ' ' + lastName} 
                handleToCertifications={handleToCertifications}/>
            </div>
 
        </div>
      </div>

      <Particles
        className="z-0 absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default DownloadHandler;
