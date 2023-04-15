import React from 'react';
import LeftNav from '../../Components/LeftNav';
import MeetUpCard from '../../Components/MeetUpCard';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ccs from '../../Assets/pictures/ccs.jpg'

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

  
export default function MeetUp () {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {};
    
    return (
        <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 flex justify-center items-center bg-black pt-[5%] pb-[5%]">
            <div className="w-[80%] h-[90%] flex flex-row z-10">
        
                <div className ='w-[15%]'>
                    <LeftNav/>
                </div>

                <div className='m-2 w-[85%] pl-[5%]'>
                    <h1 className='text-4xl pt-6 pl-6'>See what's happening around?</h1>
                    <p className='pt-6 pb-6 pl-6'>Wish to attend what you like? Just register!</p>

                    <div className='m-6'>
                        <MeetUpCard  date={'April, 25 2023 . 4:30 PK PKT'} imgSrc='stacks.svg' conductedBy={'Stack FAST Chapter . Lahore PK'} eventName={'BlockChain Cohort 4.0'} attending={4}/>
                    </div>
                    
  
                    <div className='m-6'>
                        <MeetUpCard  date={'April, 23 2023 . 7:30 PK PKT'} imgSrc={ccs} description={'Meet the most influential people of Pakistan and hear their perspectives on the things that actually matter!'} conductedBy={'Career Counseling Society . FAST LHR'} eventName={'NUCES Talks 23'} attending={4}/>
                    </div>
                     
                    <div className='m-6 '>
                        <MeetUpCard  date={'April, 15 2023 . 12:30 PK PKT'} description={'Jamming session where everyone can show case their skills.'} imgSrc='fms.png' conductedBy={'Fast Music Society . FAST LHR'} eventName={'Jamming Session'} attending={12}/>
                    </div>
                    
                </div>

            </div>
            <Particles className="z-0 absolute top-0 left-0 w-full h-full" init={particlesInit} loaded={particlesLoaded}options={options} />
        </div>
    );
}