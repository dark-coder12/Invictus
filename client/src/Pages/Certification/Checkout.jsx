import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";

import { options } from "../../Assets/code/options";

import StripeCheckout from "../../Components/StripeCheckout";

const Checkout = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleClick = () => {
    const successUrl = "http://localhost:3000/download-certificate"; // or any other success URL
    const url = `https://buy.stripe.com/test_5kA4hSaPPh2kctW8wx?success_url=${encodeURIComponent(successUrl)}&cancel_url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  }

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>

        <div className="bg-[#000000] bg-opacity-70  w-[80%] pl-10  overflow-y-auto scrollbar-thumb-transparent scrollbar-track-transparent flex flex-col items-center justify-center pt-12">
         <div className='bg-white rounded-md p-12 bg-opacity-70'>
          <StripeCheckout/>
          </div>

            {/* <button className='bg-[#3a0303] hover:bg-[#2b0202] px-2 py-1 rounded-lg m-4'
            onClick={handleClick}>Pay through Stripe's Website Instead</button> */}
    
          <p className='text-xs font-thin'>&copy; Invictus-Stripe Partnership </p>
        </div>
        <div>
          
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

export default Checkout;
