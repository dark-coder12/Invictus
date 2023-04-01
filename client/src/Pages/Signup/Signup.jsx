import React, { useEffect, useState } from "react";
import { BackgroundVideo } from "../../Components";

import SignUpForm from "../../Components/SignUpForm";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const options = {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
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
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 0.8,
      straight: false,
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
      type: "circle",
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

      <Particles className="z-0 absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default Signup;
