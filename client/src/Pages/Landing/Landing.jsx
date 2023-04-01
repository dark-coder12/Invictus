import React, { useEffect, useState } from "react";
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

const Landing = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  useEffect(() => {
    function handleScroll() {
      const heading = document.querySelector(".card");
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 400;

      const heading2 = document.querySelector(".info");
      const scrollPosition2 = window.scrollY;
      const opacity2 = -1 + scrollPosition2 / 450;

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
        <button className="mt-8 text-2xl transform transition-all duration-300 w-full z-10 hover:scale-110">
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
