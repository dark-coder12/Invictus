
import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import MyConnections from "../../Components/MyConnections";
import SearchedConnection from "../../Components/SearchedConnection";

import bis from "../../Assets/pictures/bis.jpg";
import iz from "../../Assets/pictures/iz.jpg";

const options = {
    fps_limit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: false, mode: "push" },
        onhover: {
          enable: false,
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
        type: "none",
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

const AllConnections = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {};

    const allUsers = [
      {
          icon: bis,
          name: 'Bisma-ashar246'
      },
      {
          icon: iz,
          name: 'Izza-coder12'
      },
    ]

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
                    type="text"
                    class="w-full rounded-full bg-gray focus:outline-none focus:ring-0 pl-4 font-[100] text-sm"
                    placeholder="Search Connections!"
                />
                </div>
            </div>

            <div>
              {allUsers.map(user => (
                <SearchedConnection 
                icon={user.icon} 
                name={user.name}
                />
              ))}
            </div>
        </div>

        <div className="bg-[#020202] h-full w-[30%]    flex flex-col items-center gap-10 rounded-r-md ">
          <div className="rounded-md  mt-10 w-[80%] h-[40%]">
            <div>
              <h1 className="ml-4 mb-4">View Your Connections!</h1>
              <MyConnections
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