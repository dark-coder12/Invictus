import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import bis from "../../Assets/pictures/bis.jpg";
import LeftConnectionProfile from "../../Components/LeftConnectionProfile";
import RightConnectionProfile from "../../Components/RightConnectionProfile";
import PieChartClass from "../../Components/PieChartClass";

const options = {
    fps_limit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: true, mode: "push" },
        onhover: {
          enable: true,
          mode: "attract",
          parallax: { enable: false, force: 60, smooth: 10 },
        },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 5 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: {
        anim: { enable: false, opacity_min: 0, speed: 1, sync: false },
        random: false,
        value: 0.1,
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400",
        },
        image: {
          height: 100,
          replace_color: true,
          src: "images/github.svg",
          width: 100,
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "#000000", width: 0 },
        type: "circle",
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5,
      },
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: "",
    },
    retina_detect: true,
  };
  

const OneConnection = () => {
   
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
      <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
        <div className="w-[80%] h-[90%] flex flex-row z-10">
       
          <div className ='w-[15%]'>
          <LeftNav/>
          </div> 

          <div className="bg-[#000000] bg-opacity-70 h-full w-[85%] flex flex-col items-center justify-center border border-[#020202]">
          <div className="flex flex-row border border-[#3A0303]">
          
          <div className="w-[30%] border border-[#3A0303] p-6">
           {UserDetails.map(user => (
            <LeftConnectionProfile
             icon = {user.icon}
             name = {user.name}
             username = {user.username}
             bio = {user.bio}
             followers = {user.followers}
             communities = {user.communities}
            />
           ))}
           </div>

           <div className="w-[40%] border border-[#3A0303] p-2">
           {UserDetails.map(user => (
            <RightConnectionProfile
             education = {user.education}
             institute = {user.institute}
             skills = {user.skills}
            />
           ))}
           </div>

           <div className ='w-[15%] mt-20 align-center ml-7 flex flex-col'>
           <div><PieChartClass/></div>
         
           <div className="pt-150 content-center text-[#979797] text-sm">
            <h5 className="mt-60 justify-center hover:underline underline-offset-4">Email:bismaashar665@gmail.com</h5>
            <p className="text-center hover:underline underline-offset-4">GitHub:https://github.com/bismaashar</p>
            <p className="mb-10 text-center hover:underline underline-offset-4">Contact: 042-457-246</p>
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