import React, { useEffect, useState } from "react";
import { BackgroundVideo } from "../../Components";

import SignUpForm from "../../Components/SignUpForm";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "../../Assets/code/options";

const Signup = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative flex items-center justify-center h-screen ">
      <div className="z-10 max-w-8xl mx-auto py-6 px-5">
        <SignUpForm />
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

export default Signup;
