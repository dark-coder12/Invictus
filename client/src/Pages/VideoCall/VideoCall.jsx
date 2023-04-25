import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "../../Assets/code/options";

const VideoCall = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div>
      <div className="flex flex-row h-full w-full justify-end gap-[15%] h-screen bg-black">
        <div>
          <div class="flex-grow flex flex-col items-center justify-center h-[90%]">
            <div class="flex flex-row gap-32">
              <div class="flex flex-col items-center justify-center w-full">
                <img
                  src="https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-23.jpg"
                  class="rounded-full w-[13rem]"
                />
                <span class="text-white font-bold text-lg">Aries</span>
              </div>

              <div class="flex flex-col items-center justify-center w-full">
                <img
                  src="https://w0.peakpx.com/wallpaper/416/423/HD-wallpaper-devil-boy-in-mask-red-hoodie-dark-background-4ef517.jpg"
                  class="rounded-full w-[15rem]"
                />
                <span class="text-white font-bold text-lg ">Mars</span>
              </div>
            </div>
          </div>

          <div class="flex-none flex items-center justify-center py-4 px-6 bg-gray-100 rounded-md font-bold">
            <button class="text-black hover:text-gray-400 mr-6 font-bold">
              Mute
            </button>
            <button class="text-black hover:text-gray-400 mr-6 font-bold">
              End Call
            </button>
            <button class="text-black hover:text-gray-400 mr-6  font-bold">
              Video
            </button>
          </div>
        </div>

        <div class="flex flex-col py-4 px-6 bg-black">
          <div class="h-full">
            <div class="flex flex-col h-full justify-between bg-white bg-opacity-5 rounded-md">
              <div class="flex-none flex items-center justify-center py-2 px-4 bg-[#3a0303] text-white  text-lg ">
                Chat
              </div>

              <div class="flex-none flex items-center justify-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Type a message..."
                  class="border-2 rounded-full py-2 px-4 w-full text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default VideoCall;
