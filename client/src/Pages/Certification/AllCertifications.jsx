import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import CertificationsList from "../../Components/CertificationsList";
import { options } from "../../Assets/code/options";


const AllCertifications = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>

        <div className="bg-[#000000] bg-opacity-70 h-full w-[80%] pl-10 overflow-y-auto">
          <div className="flex flex-col w-[60%] pt-[5%]">
            <h1 className="text-5xl m-0 pb-16">
              Browse through our latest catalog below.
            </h1>
            <h1 className="text-l p-0 m-0 w-[60%] pb-2 leading-5">
              Hover over any course you wish to take for more details, click to
              give it a shot now!
            </h1>
          </div>
          <div className="pl-[3%]">
            <CertificationsList />
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

export default AllCertifications;
