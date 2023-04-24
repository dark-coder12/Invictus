import React, { useEffect, useState } from "react";
import { BackgroundVideo } from "../../Components";

import SignInForm from "../../Components/SignInForm";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "../../Assets/code/options";


function Signin() {
  
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative flex items-center justify-center h-screen ">
      <div className="z-10 max-w-8xl mx-auto py-6 px-5">
        <SignInForm />
      </div>

      <Particles
        className="z-0 absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}

export default Signin;
