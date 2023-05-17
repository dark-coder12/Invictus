import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import bis from "../../Assets/pictures/bis.jpg";
import LeftConnectionProfile from "../../Components/LeftConnectionProfile";
import RightConnectionProfile from "../../Components/RightConnectionProfile";
import PieChartClass from "../../Components/PieChartClass";
import { options } from "../../Assets/code/options";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OneConnection = () => {
  
  const navigate = useNavigate();

  const {id} = useParams();
  const userID = id;

  const [isFollowed, setIsFollowed] = useState(false);

  const [userDets, setUserDets] = useState([]);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:8080/get-user-profile/${userID}`)

    .then((response) => {
  
      setUserDets(response.data);
     
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
  
    const uID = userID;
    const loggedID = localStorage.getItem('userID');

    axios.get(`http://localhost:8080/is-user-connected/${loggedID}/${uID}`)

    .then((response) => {
  
      setIsFollowed(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get(`http://localhost:8080/get-user-skills/${userID}`)

    .then((response) => {
  
      console.log(response.data);
      setUserSkills(response.data);
     
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);


  const handleFollow = () => {

    const uID = userID;
    const loggedID = localStorage.getItem('userID');

    axios.get(`http://localhost:8080/connect-user/${loggedID}/${uID}`)

    .then((response) => {
  
      setIsFollowed(true);
      
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleUnfollow = () => {

    const uID = userID;
    const loggedID = localStorage.getItem('userID');

    axios.get(`http://localhost:8080/disconnect-user/${loggedID}/${uID}`)

    .then((response) => {
  
      setIsFollowed(false);
      
    })
    .catch((error) => {
      console.error(error);
    });
  }


  const handleNavigateToConnections = () => {
    navigate('/all-connections')
  }

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {};
    
    return(
      <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black pt-[5%] pb-[5%]">
        <div className="w-[80%] h-[100%] flex flex-row z-10">
       
          <div className ='w-[15%]'>
          <LeftNav/>
          </div> 

          <div className="bg-[#000000] bg-opacity-70 h-full w-[100%] flex flex-col items-center justify-center border border-[#020202] ml-[5%]">
          <div className="flex flex-row border border-[#3A0303]">
          
          <div className="w-[30%] border border-[#3A0303] p-6">
           {userDets.map(user => (
            <LeftConnectionProfile
             imgUrl = {user.imgUrl}
             firsrtName = {user.firstName}
             lastName = {user.lastName}
             email = {user.email}
            isFollowed = {isFollowed}
            handleFollow = {handleFollow}
            handleUnfollow = {handleUnfollow}
            />
           ))}
           </div>

           <div className="w-[40%] border border-[#3A0303] p-2">
           {userSkills.map(user => (
            <RightConnectionProfile
             phdDegree = {user.phdDegree}
             phdInstitute = {user.phdInstitute}
             mastersDegree = {user.mastersDegree}
             mastersInstitute = {user.mastersInstitute}
             bachelorsDegree = {user.bachelorsDegree}
             bachelorsInstitute = {user.bachelorsInstitute}
             skills = {user.skills}
            />
           ))}
           </div>

           <div className ='w-[15%] mt-20 align-center flex flex-col'>
           <div><PieChartClass/></div>
        
           <div className="content-center text-[#979797] text-sm ml-[10%] pt-12 ">
            <p className="text-justify text-center hover:underline underline-offset-4 mb-4 ">
              <p className = 'underline pb-2'> GitHub</p>
             www.github.com/bismaashar</p>
            
           </div>
          </div> 
          </div>
          <button className="mt-6 bg-[#3A0303] text-white rounded-md" onClick={handleNavigateToConnections}>Back to Connections</button>
     

          </div>
        </div>

        <Particles
        className="z-0 absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        />
      </div>
    )
}
export default OneConnection