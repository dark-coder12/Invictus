import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import InputField from "../../Components/inputField";
import NewCommunitiesList from "../../Components/NewCommunitiesList";
import ExistingCommunities from "../../Components/ExistingCommunities";
import { options } from "../../Assets/code/options"; 
import CommunityCard from "../../Components/CommunityCard";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AllCommunities = () => {

  const [searchedName, setSearchedName] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  var isSearching = false;

  const onSearch = (e) => {      

  const fetchName = async () => {
  const name = await axios.get(`http://localhost:8080/get-communityname/${searchedName}`);

  setSearchedResults(name.data);
  isSearching = true;

  console.log(searchedResults);
  };

  if (searchedName !== "") fetchName();
  };

  //for new communities
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

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {};

    return(
     <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center bg-black ">
      <div className="w-[100%] h-[100%]  flex flex-row z-10 justify-center p-[3%]">
         
        <div className ='w-[15%]'>
           <LeftNav/>
        </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[65%] overflow-auto p-[2%] m-[3%] pt-0">
         
          <div className="flex flex-col w-[100%] pt-[5%]">
           
               <h1 className="text-4xl m-0 pb-10 w-[60%]">Browse through the existing communities.</h1>
               <div class="rounded-full bg-gray-100 flex flex-row items-center p-2 pl-5 w-[100%] h-[80%] mb-14">
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
                    type="text"
                    class="w-full rounded-full bg-gray focus:outline-none focus:ring-0 pl-4 font-[100] text-sm text-black"
                    value={searchedName} onChange={(e) => setSearchedName(e.target.value)}
                    placeholder="Explore Communities!"
                />
                <button class="text-xs px-2 py-1 text-white bg-[#3a0303] hover:bg-[#2B0202] rounded-lg focus:outline-none" onClick={onSearch}>
                  Search
                 </button>
                </div>           
          </div>
            <div>
              <div className="container mx-auto py-8 flex flex-row justify-center">
              {
               isSearching ? 

               <div className="grid grid-cols-1 sm:grid-cols-2  gap-14 w-[80%] h-[60%]">
              
               {searchedResults.map((community, index) => (
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

              :

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
              }
              </div>
            </div>
       </div>
            <div className ='w-[20%]'>
              <ExistingCommunities/>
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

export default AllCommunities