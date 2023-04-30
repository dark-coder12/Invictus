import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";

import { options } from "../../Assets/code/options";

import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {

    const navigate = useNavigate();

    const particlesInit = async (main) => {
        await loadFull(main);
    };

  const handleDownload = () => {
    navigate('/download-certificate');
  }

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[80%] pl-10 flex flex-col justify-center items-center gap-12">
        <p className= 'text-3xl pl-[10%]'>Your payment of $1.00 was successful at Invictus!</p>

        <button class="bg-[#3a0303] rounded-md py-2 px-4 hover:bg-[#2a0202]"
        onClick={handleDownload}>
          Get your certificate now
        </button>
       
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

export default CheckoutSuccess;
