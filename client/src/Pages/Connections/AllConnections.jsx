
import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import MyConnections from "../../Components/MyConnections";
import SearchedConnection from "../../Components/SearchedConnection";

import { options } from "../../Assets/code/options";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { version } from "os";

const AllConnections = () => {

  const userID = localStorage.getItem('userID');
    console.log(userID)

  const navigate = useNavigate();

  const [userDets, setUserDets] = useState([]);

  const [searchedConnection, setSearchedConnection] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [allResults, setAllResults] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:8080/get-user-profile/${userID}`)

    .then((response) => {
  
      console.log(response.data);
      setUserDets(response.data);
     
    })
    .catch((error) => {
      console.error(error);
    });
 

  axios.get(`http://localhost:8080/get-all-users/${userID}`)

    .then((response) => {
  
      console.log(response.data);
      setAllResults(response.data);
     
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  
  const handleConnectionVisit = (uID) => {

    axios.get(`http://localhost:8080/get-clicked-user/${uID}`)

    .then((response) => {
  
      console.log(response.data);
      setAllResults(response.data);   
    })
    .catch((error) => {
      console.error(error);
    });

    navigate(`/connection/${uID}`);
  }

  useEffect(() => {

    if(searchedConnection == "")
      setSearchResults([]);
    setSearchResults(allResults.filter(con => {

      return con.firstName.toLowerCase().includes(searchedConnection.toLowerCase())
      }));
      if(searchedConnection == "")
      setSearchResults([]);
      
  }, [searchedConnection]);

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {};


    return(
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
       
       <div className ='w-[15%]'>
         <LeftNav/>
       </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[80%] pl-10 overflow-y-auto">       
          <div className="flex flex-col w-[70%] pt-[5%]">
               <h1 className="text-4xl m-0 pb-10">Invictus Connect - Find your kind of people!</h1>
               <div class="rounded-full bg-gray-100 flex flex-row items-center p-2 pl-5 w-[140%] h-[80%] mb-14">
                <svg
                    class="svg-icon search-icon left-2 h-4 w-6 text-gray-500"
                    aria-labelledby="title desc"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19.9 19.7"
                >
                    <title id="title">Search Icon</title>
                    <desc id="desc">A magnifying glass icon.</desc>
                    <g class="search-path" fill="none" stroke="#848F91">
                    <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                    <circle cx="8" cy="8" r="7" />
                    </g>
                </svg>
                <input
                    value = {searchedConnection}
                    onChange={(e)=> setSearchedConnection(e.target.value)}
                    type="text"
                    class="w-full rounded-full bg-gray focus:outline-none focus:ring-0 pl-4 font-[100] text-sm text-black"
                    placeholder="Search Connections!"
                />
                </div>
            </div>

            <div>
              {searchResults.map((u) => (
                <SearchedConnection 
                imgUrl={u.imgUrl} 
                firstName={u.firstName}
                lastName={u.lastName}
                handleConnectionVisit = {()=> handleConnectionVisit(u.userID)}
                />
              ))}
            </div>
        </div>

        <div className="bg-[#020202] h-full w-[30%]    flex flex-col items-center gap-10 rounded-r-md ">
          <div className="rounded-md  mt-10 w-[80%] h-[40%]">
            <div>
              <h1 className="ml-4 mb-4">View Your Connections!</h1>
              <MyConnections
              user = {userID}
              />
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

export default AllConnections