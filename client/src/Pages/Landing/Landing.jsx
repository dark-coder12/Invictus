import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "../../Assets/code/options";

import { useNavigate } from 'react-router-dom';

const Landing = () => {

const navigate = useNavigate();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  
  function handleGetStartedClick() {
    navigate('/signup');
  }

  const particlesLoaded = (container) => {};

  useEffect(() => {
    function handleScroll() {
      const heading = document.querySelector(".card");
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 300;

      const heading2 = document.querySelector(".info");
      const scrollPosition2 = window.scrollY;
      const opacity2 = -1 + scrollPosition2 / 350;

      heading.style.opacity = opacity;
      heading2.style.opacity = opacity2;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[200vh]">
      <div className="card h-screen flex flex-col items-start justify-end pl-20 pb-8 text-white">
        <p className="text-5xl">&lt; Hello there, this is </p>
        <p className="text-4xl text-red-900 pl-8"> Invictus /&gt; </p>
      </div>
      <div className="info flex flex-col items-center justify-end text-white mt-24">
        <p className="text-9xl font-medium p-0 mb-8">Invictus</p>
        <div className="w-[40vw] bg-black/50 rounded p-8 text-justify text-lg">
          <p>
            A professionally deployed web application that caters to all needs
            coding and learning. Connect to users, get certificates and know
            that Izzah is the coolest.
          </p>
        </div>
        <button className="mt-8 text-2xl transform transition-all duration-300 w-full z-10 hover:scale-90" 
        onClick={handleGetStartedClick}
        >
          Let's get started <br />
          <p className="text-7xl">&rarr;</p>
        </button>
      </div>

      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default Landing;
