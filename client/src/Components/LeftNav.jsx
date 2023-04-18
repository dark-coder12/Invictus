import React from "react";

import SpotifyPlayer from "../Components/SpotifyPlayer";
import invLogo from "../Assets/pictures/maroonLogo.png";
import profileLogo from "../Assets/pictures/profile.png";
import displayPicture from "../Assets/pictures/display-picture.jpg";
import headphone from "../Assets/pictures/maroonH.png";

const LeftNav = () => {
  return (
    <div className="bg-[#020202] h-full flex flex-col justify-between rounded-l-md">
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
  );
};

export default LeftNav;
