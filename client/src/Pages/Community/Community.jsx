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

const Community = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {};

    const posts = [
        {
          name: 'Bisma-ashar246',
          icon: bis,
          description: 'I recently started Deep Learning Specialization course from coursera and need feedback if it is worth it or not.',
          date: '11-04-2023'
        },
        {
          name: 'burak_munir06',
          icon: burak,
          description: 'I heard about this from a friend I can connect you with him. ',
          date: '12-04-2023'
        },
        {
          name: 'izzah_X12',
          icon: iz,
          description: 'I have taken Natural Language Processing Specialization course from coursera and had a very good experience.',
          date: '12-04-2023'
        },
      ];

    return(
     <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
         
        <div className ='w-[15%]'>
           <LeftNav/>
        </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[80%] pl-10 overflow-y-auto">      
          <div>
               < CommunityHeader/>               
          </div>

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
              <AddToCommunity/>
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

             <div className="mt-5">
             <p>Community Reach : 1170 users</p>
             <ProgressBar/>
             </div>

             <div className="mt-5">
             <p>Community Members : 600/300 active users</p>
             <ProgressBar/>
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