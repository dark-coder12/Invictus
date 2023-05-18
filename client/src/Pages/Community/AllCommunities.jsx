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
  const [isSearching, setIsSearching] = useState(false);

  const onSearch = (e) => {
    const fetchName = async () => {
      const name = await axios.get(`http://localhost:8080/get-communityname/${searchedName}`);
      setSearchedResults(name.data);
      setIsSearching(true);
    };

    if (searchedName !== "") fetchName();
  };

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

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center bg-black ">
      <div className="w-[100%] h-[100%]  flex flex-row z-10 justify-center p-[3%]">
        <div className ='w-[15%]'>
          <LeftNav/>
        </div>
        <div className="bg-[#000000] bg-opacity-70 h-full w-[65%] overflow-auto p-[2%] m-[3%] pt-0">
          <div className="flex flex-col w-[100%] pt-[5%]">
            <h1 className="text-4xl m-0 pb-10 w-[60%]">Browse through the existing communities.</h1>
           
          </div>
          <div>
            <div className="container mx-auto py-8 flex flex-row justify-center">
              {isSearching ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 w-[80%] h-[60%]">
                  {searchedResults.map((community, index) => (
                    <CommunityCard
                      title={community.title} 
                      image={community.image}
                      members={community.members}
                      description={community.description}
                      bg={community.bg}
                      handleOnClick={() => handleOnClick(index+1)}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 w-[80%] h-[60%]">
                  {communities.map((community, index) => (
                    <CommunityCard
                      title={community.title} 
                      image={community.image}
                      members={community.members}
                      description={community.description}
                      bg={community.bg}
                      handleOnClick={() => handleOnClick(index+1)}
                    />
                  ))}
                </div>
              )}
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
  );
}

export default AllCommunities;
