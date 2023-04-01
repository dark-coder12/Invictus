import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Post from "../../Components/Post";
import ConnectionPost from "../../Components/ConnectionPost";
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
import halsey from "../../Assets/pictures/halsey.jpg";

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

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="bg-[#020202] h-full w-[15%]  flex flex-col justify-between rounded-l-md">
          <div>
            <div className="flex justify-center gap-1 w-full pt-5">
              <img src={invLogo} className="w-32 pb-10" />
            </div>
            <div className="flex items-center pb-2 pt-2 hover:bg-none hover:bg-opacity-50 gradientHover cursor-pointer hover:font-[600] pl-[15%]">
              <img src={profileLogo} className="w-4" />
              <span className="ml-2">Home</span>
            </div>
            <div className="flex items-center pb-2 pt-2 hover:bg-none hover:bg-opacity-50 gradientHover cursor-pointer pl-[15%]">
              <img src={profileLogo} className="w-4" />
              <span className="ml-2">Community</span>
            </div>
            <div className="flex items-center pb-2 pt-2 hover:bg-none hover:bg-opacity-50 gradientHover cursor-pointer pl-[15%]">
              <img src={profileLogo} className="w-4" />
              <span className="ml-2">Connect</span>
            </div>
          </div>

          <div className="w-8 rounded-lg w-full flex flex-col justify-center items-center gap-5">
            <img className="shadow-lg w-[50%]" src={headphone} />

            <p>Music </p>
            <SpotifyPlayer />
          </div>

          <div className="flex flex-row justify-center items-center pb-[10%] gap-3">
            <img className="rounded-3xl w-8" src={displayPicture} />
            <p>IzX12</p>
          </div>
        </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[65%] flex flex-col items-center justify-center gap-10">
          <div className="pt-5 flex flex-col items-center">
            <h1 className="text-2xl p-0 m-0">Newest in 'Topic of the Day'</h1>
            <h1 className="text-l p-0 m-0 hover:underline hover:cursor-pointer underline">
              State & Props in React JS
            </h1>
          </div>

          <div className="w-[60%] h-[40%] shadow-xl ">
            <Post />
          </div>
          <div className="w-[60%] h-[40%] shadow-xl rounded-md flex flex-col gap-5 overflow-y-auto">
            <ConnectionPost
              blogName='"Halsey is Cool"'
              authorName="Coolio"
              date="12/07/22"
              icon={displayPicture}
              image={halsey}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <ConnectionPost
              blogName='"Halsey is Cool"'
              authorName="Coolio"
              date="12/07/22"
              icon={displayPicture}
              image={halsey}
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
              />
              <img
                className="w-10 hover:rounded-md hover:p-1"
                src={eventLogo}
              />
              <img
                className="w-10  hover:rounded-md hover:p-1"
                src={connectionsLogo}
              />
              <img className="w-10 hover:rounded-md hover:p-1" src={AILogo} />
              <img
                className="w-10  hover:rounded-md hover:p-1"
                src={blogLogo}
              />
              <img
                className="w-10  hover:rounded-md hover:p-1"
                src={communityLogo}
              />
            </div>

            <div className="w-[100%] flex flex-row justify-center ">
              <div className="w-[80%] pt-10">
                <p>C#</p>
                <LinearWithValueLabel show="False" />
              </div>

              <div className="w-[80%] pt-10">
                <p>Java</p>
                <LinearWithValueLabel show="False" />
              </div>
            </div>

            <div className="w-[100%] flex flex-row justify-center">
              <div className="w-[80%] pt-10">
                <p>Ruby</p>
                <LinearWithValueLabel show="False" />
              </div>

              <div className="w-[80%] pt-10">
                <p>Swift</p>
                <LinearWithValueLabel show="False" />
              </div>
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
  );
};

export default Home;
