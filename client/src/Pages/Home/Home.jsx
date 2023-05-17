import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Post from "../../Components/Post";
import ConnectionPost from "../../Components/ConnectionPost";
import LeftNav from "../../Components/LeftNav";
import SpotifyPlayer from "../../Components/SpotifyPlayer";

import invLogo from "../../Assets/pictures/maroonLogo.png";
import profileLogo from "../../Assets/pictures/profile.png";
import displayPicture from "../../Assets/pictures/display-picture.jpg";
import headphone from "../../Assets/pictures/maroonH.png";
import phoneLogo from "../../Assets/pictures/phoneLogo.png";
import certificateLogo from "../../Assets/pictures/certificateLogo.png";
import connectionsLogo from "../../Assets/pictures/connectionsLogo.png";
import eventLogo from "../../Assets/pictures/eventLogo.png";
import AILogo from "../../Assets/pictures/AILogo.png";
import blogLogo from "../../Assets/pictures/blogLogo.png";
import communityLogo from "../../Assets/pictures/communityLogo.png";
import LinearWithValueLabel from "../../Components/ProgressBar";
import badgeLogo from "../../Assets/pictures/badgeLogo.png";
import techImg from "../../Assets/pictures/techImg.jpg";
import { options } from "../../Assets/code/options";

import { useNavigate } from "react-router-dom";

import axios from 'axios';

const Home = (props) => {

  const [certifications, setCertifications] = useState([]);

  const [topicOfTheDay, setTopicOfTheDay] = useState({});

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    const userID = localStorage.getItem('userID');
  
     axios.get(`http://localhost:8080/get-certifications/${userID}`)
      .then(response => {

        setCertifications(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      
      axios.get(`http://localhost:8080/topic-of-the-day`)
      .then(response => {

       setTopicOfTheDay(response.data)
      })
      .catch(error => {
        console.error(error);
      });
      

  }, []);


  const showTopic = () => {
    
    setShow(true);
  }

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  const handleLogOut = () => {

    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      props.handleLogout();
    } 
  }

  const handleCertificationsClick = () => {

    navigate('/all-certifications');

  }
  return (
    
    <div>
      <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 flex justify-center items-center bg-black h-screen">
     
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav/>
        </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[65%] flex flex-col items-center justify-center gap-10">
          <div className="pt-5 flex flex-col items-center">
            <h1 className="text-2xl p-0 m-0">Newest in 'Topic of the Day'</h1>
            <h1 className="text-l p-0 m-0 hover:underline hover:cursor-pointer underline" onClick = {showTopic}>
              {topicOfTheDay.topicName}
            </h1>
          </div>

          <div className="w-[60%] h-[40%] shadow-xl ">
            <Post />
          </div>
          <div className="w-[60%] h-[40%] shadow-xl rounded-md flex flex-col gap-5 overflow-y-auto">
            <ConnectionPost
              blogName='"Invictus: The New Fad"'
              authorName="Coolio"
              date="12/07/22"
              icon={displayPicture}
              image={techImg}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <ConnectionPost
              blogName='"The current advancements in Tech"'
              authorName="Coolio"
              date="12/07/22"
              icon={displayPicture}
              image={techImg}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>

        <div className="bg-[#020202] h-full w-[20%]    flex flex-col items-center gap-10 rounded-r-md ">
          <div className="rounded-md  mt-10 w-[80%] h-[40%]">
            <div className="flex flex-row flex-wrap gap-8 p-5 items-center justify-center bg-gray-black rounded-md bgcheck  bg-opacity-20">
              <div className="text-lg flex flex-col items-center justify-center pt-2">
                <p>Quick Access</p>
              </div>
              <img
                className="w-10 hover:rounded-md hover:p-1"
                src={phoneLogo}
                onClick={()=>navigate('/video-call')}
              />
              <img
                className="w-10 hover:rounded-md hover:p-1"
                src={eventLogo}
                onClick={()=>navigate('/meetup')}
              />
              <img
                className="w-10  hover:rounded-md hover:p-1"
                src={connectionsLogo}
                onClick={()=>navigate('/codebot')}
              />
              <img className="w-10 hover:rounded-md hover:p-1" src={AILogo} />
              <img
                className="w-10  hover:rounded-md hover:p-1"
                src={blogLogo}
                onClick={()=>navigate('/blog-posts')}
              />
              <img
                className="w-10  hover:rounded-md hover:p-1"
                src={certificateLogo}
                onClick = {handleCertificationsClick}
              />
            </div>

            <div className="w-[100%] flex flex-wrap justify-left gap-4 pt-5">
            {certifications.map((certification) => (

            <div className="w-[45%] pt-4" key={certification.certificationName}>
              <p>{certification.certificationName}</p>
              <LinearWithValueLabel value={certification.percentage} showPer={true} />
            </div>
           ))}
            </div>

            <div className="text-md flex flex-col items-center justify-center">
              <p className="pt-12 underline pb-4">My Badges</p>
            </div>

            <div className="flex flex-row justify-center gap-3 items-center w-[100%] pr-2">
              <img
                className="w-10 hover:bg-white hover:rounded-md hover:p-1"
                src={badgeLogo}
              />
              <img
                className="w-10 hover:bg-white hover:rounded-md hover:p-1"
                src={badgeLogo}
              />
              <img
                className="w-10 hover:bg-white hover:rounded-md hover:p-1"
                src={badgeLogo}
              />
            </div>
            <div className='flex flex-row justify-center p-4'>
            <button onClick={handleLogOut}>Logout</button>
            </div>
            
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
    {show &&  <div className="">
      <div className={`flex flex-row w-full absolute inset-0 z-40 ${show ? 'bg-black bg-opacity-50' : ''}`} />
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        {show && (
          <div className="w-[50%] bg-white p-6 rounded-lg">
            <div className = 'flex flex-row justify-between px-4 pb-8 items-center'>
            <p className="block font-bold text-lg">Topic of the day</p>
             <button className="flex flex-row justify-center bg-[#3a0303] hover:bg-[#2b0202] text-white font-bold py-2 px-4 rounded" onClick={() => setShow(false)}>
              Close
            </button>
            </div>
            <p className="text-gray-800 font-md text-justify">{topicOfTheDay.topicDescription}</p>

          </div>
        )}
      </div>
      </div>
      }
    </div>
  );
};

export default Home;
