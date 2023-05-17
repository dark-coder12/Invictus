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

const OneConnection = () => {
  
  const [userDets, setUserDets] = useState([]);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem('userID');
    console.log(userID)

    axios.get(`http://localhost:8080/get-user-profile/${userID}`)

    .then((response) => {
  
      console.log(response.data);
      setUserDets(response.data);
     
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    const userID = localStorage.getItem('userID');
    console.log(userID)

    axios.get(`http://localhost:8080/get-user-skills/${userID}`)

    .then((response) => {
  
      console.log(response.data);
      setUserSkills(response.data);
     
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {};

      const UserDetails = [
        {
            icon: bis,
            name: 'Bisma Ashar',
            username: 'Bisma-ashar246',
            bio: 'Software Engineer by fault - Enthusiast by Choice',
            followers: '20 followers',
            communities: '8 communities',
            education: ['Doctor of Philosophy in Software Project Management' , 'Masters in Software Project Management'],
            institute:['Massachusetts Institute of Technology - 2030' , 'Technical University of Munich'],
            skills:['OOP' , 'Blockchain' , 'UI/UX' , 'NLP' , 'AI' , 'Web Dev' , 'App Dev' , 'Database' , 'Testing' , 'Documentation']
        },
      ]
    
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
             bio = "this is a filler bio"
             email = {user.email}
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
         
           <div className="content-center text-[#979797] text-sm ml-[10%] ">
            <p className="text-justify text-center hover:underline underline-offset-4 mb-4">GitHub:<br></br>www.github.com/bismaashar</p>
            <p className="mb-10 text-center hover:underline underline-offset-4 text-justify ">Contact:<br></br> 042-457-246</p>
           </div>
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
    )
}
export default OneConnection