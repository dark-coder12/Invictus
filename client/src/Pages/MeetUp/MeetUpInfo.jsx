import React from "react";
import LeftNav from "../../Components/LeftNav";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DateRangeIcon from '@mui/icons-material/DateRange';
import 'C:/Users/Mr  Rabbani/OneDrive - FAST National University/Semester-6/Web Engineering/Project/Invictus/client/src/index.css'
import { Avatar, AvatarGroup} from "@mui/material";
import Fab from '@mui/material/Fab';
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
  

export default function MeetUpInfo({}){
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {};
    
    return(
        <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
            <div className="w-[80%] h-[90%] flex flex-row z-10">
        
                <div className ='w-[20%]'>
                    <LeftNav/>
                </div>

                <div className='m-6 w-[80%] border-y-2 p-2 overflow-auto'>
                    <div style={{borderBottom:"1px solid white"}}>
                        <h1 className="text-3xl">Blockchain Cohort 4.0</h1>
                        <div className='mt-2 mb-2'>
                            {/* for now the host */}
                            <img src='stacks.svg'></img>
                        </div>
                        <div>
                            <h1>Hosted By</h1>
                            <h1>Stacks Pakistan FAST Chapter</h1>
                        </div>
                    </div>

                    <div className="flex justify-evenly mt-6">
                        <div className="w-[50%]">
                            <img src='stacksevent.jpg' className='w-[50%] rounded-2xl h-[100%]'></img>
                        </div>
                        <div className="glassmorph w-[50%] flex flex-col justify-center p-2">
                            <div className="ml-[25%] flex flex-row">
                                <DateRangeIcon/>
                                <h1>Monday, April 24, 2023</h1>
                            </div>
                            <br/>
                            <div className="ml-[25%] flex flex-row">
                                <AccessTimeFilledIcon/>
                                <h1>9:30 PM to 10:30 PM PKT</h1>
                            </div>
                            
                        </div>
                    </div>

                    <div className='mt-4'>
                        <div>
                            <h1 className="text-2xl">Details</h1>
                            <small>We are excited to announce a free, live bootcamp event for students who are interested in learning about Power Apps! This bootcamp is organized to provide students with a comprehensive understanding of Power Apps and how it can be used to build custom business applications without writing code.</small>
                        </div>
                        <div className="mt-2">
                            <h1  className="text-2xl">Who is it for?</h1>
                            <small>This bootcamp is perfect for students who are interested in pursuing a career in technology. By attending the bootcamp, students will gain valuable application development skills across Microsoft Technologies. This is an excellent opportunity for students to learn from a seasoned expert and gain practical skills that will be useful in their future careers.</small>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-2xl">Prerequsites</h1>
                            <small>No prior experience with Power Apps is required.</small>
                        </div>
                        <div className='mt-2'>
                            <h1 className="text-2xl">Venue</h1>
                            <small>FAST NUCES LAHORE</small>
                            <img src="fast.png"></img>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-2xl">Speaker</h1>
                            <div className="flex">
                                <Avatar src={'https://avatars.githubusercontent.com/u/82564549?v=4'}/>
                                <small className="ml-2 self-center">Izzah Mujeeb</small>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h1 className="text-2xl">Relevant Tags</h1>
                            <div className="flex">
                                <Fab  style={{margin:"1%", color:"white" ,backgroundColor:"#3A0303"}} variant="extended" sx={{ width: 150, height: 25 }}>BlockChain</Fab>
                                <Fab  style={{margin:"1%", color:"white" ,backgroundColor:"#3A0303"}} variant="extended" sx={{ width: 150, height: 25 }}>Etherium</Fab>
                                <Fab  style={{margin:"1%", color:"white" ,backgroundColor:"#3A0303"}} variant="extended" sx={{ width: 150, height: 25 }}>Ether Gas</Fab>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h1 className="text-2xl">Attendees(4)</h1>
                            <div className="flex">
                                <AvatarGroup max={3}>
                                    <div className="ml-2">
                                    <Avatar src={'https://avatars.githubusercontent.com/u/82564549?v=4'}/>
                                    </div>
                                    <div className="ml-2">
                                    <Avatar src={'https://avatars.githubusercontent.com/u/82564549?v=4'}/>
                                    </div>
                                    <div className="ml-2">
                                    <Avatar src={'https://avatars.githubusercontent.com/u/82564549?v=4'}/>
                                    </div>
                                    <div className="ml-2">
                                    <Avatar src={'https://avatars.githubusercontent.com/u/82564549?v=4'}/>
                                    </div>
                                </AvatarGroup>    
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Particles className="z-0 absolute top-0 left-0 w-full h-full" init={particlesInit} loaded={particlesLoaded}options={options} />
        </div>
            
            
        
    );
}