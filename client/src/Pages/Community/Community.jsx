import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import InputField from "../../Components/inputField";
import NewCommunitiesList from "../../Components/NewCommunitiesList";
import CommunityHeader from "../../Components/CommunityHeader";
import AddToCommunity from "../../Components/AddToCommunity";
import CommunityPost from "../../Components/CommunityPost";
import ProgressBar from "../../Components/ProgressBar";


import iz from "../../Assets/pictures/iz.jpg";
import bis from "../../Assets/pictures/bis.jpg";
import burak from "../../Assets/pictures/burak.jpg";
import badgeLogo from "../../Assets/pictures/badgeLogo.png";
import { options } from "../../Assets/code/options";

import { useState, useEffect } from "react";
import axios from 'axios';

import { useParams } from "react-router-dom";

const Community = () => {

  const {id} = useParams();
  const cID = id;

   const [isUserJoined, setUserJoined] = useState
   (false);

  const uID = localStorage.getItem('userID');
  const [communityDets, setCommunityDets] = useState([]);
  var myCommunity;
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchCurrentCommunity = async () => {

      try {
        const response = await axios.get(`http://localhost:8080/get-community/${cID}`);
        console.log(response.data);
        
        setCommunityDets(response.data);
      } catch (error) {
        console.error(error);
      }
      
    }
    fetchCurrentCommunity();

      axios.get(`http://localhost:8080/is-user-joined/${cID}/${uID}`)

      .then((response) => {
      
      setUserJoined(response.data);
       
      })
      .catch((error) => {
        console.error(error);
      });

      axios.get(`http://localhost:8080/community-posts/${cID}`)
      .then((response) => {
        const postsData = response.data;
       
        setPosts(postsData);
      })
      .catch((error) => {
        console.error('error getting posts', error);
      });

  }, []);
  
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {};

    const addCommunity = () => {

    
      axios.post(`http://localhost:8080/add-user-community/${cID}/${uID}`, {
        title: communityDets.title,
        bg: communityDets.bg
      })

      .then((response) => {
          setUserJoined(true);
       
      })
      .catch((error) => {
        console.error(error);
      });
    }

    const removeCommunity = () => {

      axios.delete(`http://localhost:8080/delete-user-community/${cID}/${uID}`)

      .then((response) => {
          setUserJoined(false);
       
      })
      .catch((error) => {
        console.error(error);
      });
    }

    
    const addPostInCommunity = (con) => {

      const postData = {
        userID: uID ,
        communityID: cID ,
        content: con,
      };
    
      axios.post('http://localhost:8080/post-in-community', postData)
        .then((response) => {
        
        })
        .catch((error) => {
          console.error('error creating post', error);
        });

    }
  

   
    return(
     <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
         
        <div className ='w-[15%]'>
           <LeftNav/>
        </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[80%] pl-10 overflow-y-auto">      
          <div>
              {communityDets && 
               <CommunityHeader
                 title = {communityDets.title}
                 description = {communityDets.description}
                 bg = {communityDets.bg}
               />    
              }        
          </div>
          {
            !isUserJoined ?  <button className="text-sm ml-2 px-2 w-[5rem]  mt-3 py-1 text-white bg-[#3a0303] hover:bg-[#2B0202] rounded-lg focus:outline-none" 
            type="submit" onClick={addCommunity}>
            Join! <i class="bi bi-lock"></i>
          </button>
          : 
          <button className="text-sm ml-2 px-2 w-[5rem]  mt-3 py-1 text-white bg-[#3a0303] hover:bg-[#2B0202] rounded-lg focus:outline-none"
          onClick={removeCommunity}
          >
          Opt out!
        </button>
          }
         

          <div className="flex flex-row mt-10">
            <div className="grid gap-5">
              {posts.map(post => (
               <CommunityPost
                 name={post.name} 
                 icon = {post.icon}
                 description={post.description}
                 date = {post.date}
                />
              ))}
            </div>

            <div className="flex flex-col">
            <div className="ml-10 w-[25rem]">
              <AddToCommunity isUserJoined = {isUserJoined} addPostInCommunity = {addPostInCommunity}/>
            </div>

            <div className="bg-[#000010] rounded-md border border-white p-2  ml-10 flex flex-col">
             <h1 className="bg-[#3a0303] text-white text-center">Community Achievements</h1>
             
             <div className="flex flex-row">
                <img src={badgeLogo} alt = "badge" className="w-[4rem] h-[3rem] pr-2"></img>
                <p className="mt-3">Winner - AI Championship 2022 </p>
             </div>

             <div className="flex flex-row">
                <img src={badgeLogo} alt = "badge" className="w-[4rem] h-[3rem] pr-2"></img>
                <p className="mt-3">Runner Up - Geek Olympiad 2020 </p>
             </div>

             <div className="flex flex-row">
                <img src={badgeLogo} alt = "badge" className="w-[4rem] h-[3rem] pr-2"></img>
                <p className="mt-3">Best Community - AI Week 2019 </p>
             </div>

          
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

export default Community