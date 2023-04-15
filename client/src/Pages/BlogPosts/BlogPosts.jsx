import React from "react";
import Blog from "../../Components/Blog";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import { Avatar } from "@mui/material";

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

var bloggerDescription = 'As a blogger, I have the amazing opportunity to share my thoughts, ideas, and experiences with a vast audience. Its truly rewarding to express myself and connect with others who share my interests through my blog. To be a successful blogger, I understand the importance of having a clear focus for my blog and creating high-quality content that engages and informs my readers consistently. Additionally, I have developed skills in social media marketing and search engine optimization to help promote my blog and expand my audience. Despite its challenges, blogging is a fulfilling pursuit, and I am excited to continue on this journey and see where it takes me.';
var classesInJava = 'Java is an object-oriented programming language.Everything in Java is associated with classes and objects, along with its attributes and methods. For example: in real life, a car is an object. The car has attributes, such as weight and color, and methods, such as drive and brake.A Class is like an object constructor, or a "blueprint" for creating objects.'

export default function BlogPosts () {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {};
  
    return (
        <div>
            <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
            <div className="w-[90%] h-[90%] flex flex-row z-10">
        
                <div style={{width:"20%",display:"flex"}} className ='w-[15%] ml-0'>
                    <LeftNav/>
                </div>
                
                <div style={{width:"80%", overflow:"auto"}}>
                  <div className='ml-8 flex'>
                    <div className="flex-col justify-center">
                      <Avatar sx={{width:100, height:100,top:"25%"}} src="https://avatars.githubusercontent.com/u/82564549?v=4"/>
                    </div>

                    <div style={{display:"flex", marginLeft:"2%", flexDirection: "column",justifyContent:"center"}}>
                      <h1>Burak Bin Munir</h1>
                      <small>{bloggerDescription}</small>
                    </div>

                  </div>
                  <div  style={{ width:"100%",overflow:"auto", padding:"2%"}} className='grid grid-cols-3'>
                    <div style={{margin:"2%",width:"auto",height:"auto"}}>
                      <Blog blogName="Clases in java" description={classesInJava} imgSrc='java.png'/>
                    </div>
                    <div style={{margin:"2%",width:"auto",height:"auto"}}>
                      <Blog blogName="My Favorite Algorithim" description="It was so nice being in the mountains" imgSrc='algo.jpeg'/>
                    </div>
                    <div style={{margin:"2%",width:"auto",height:"auto"}}>
                      <Blog blogName="friend function in C++" description="It was so nice being in the mountains" imgSrc='c++.png'/>
                    </div>
                    <div style={{margin:"2%",width:"auto",height:"auto"}}>
                      <Blog blogName="Python is best for machine learning" description="It was so nice being in the mountains" imgSrc='python.jpeg'/>
                    </div>
                    <div style={{margin:"2%",width:"auto",height:"auto"}}>
                      <Blog blogName="useState in react" description="It was so nice being in the mountains" imgSrc='react.png'/>
                    </div>
                    
                    <div style={{margin:"2%",width:"auto",height:"auto"}}>
                      <Blog blogName="Standard of Ruby on Rails" description="It was so nice being in the mountains" imgSrc='ror.png'/>
                    </div>
                    <div style={{margin:"2%",width:"auto",height:"auto"}}>
                      <Blog blogName="new key world in solidity" description="It was so nice being in the mountains" imgSrc='solidity.png'/>
                    </div>
                    
                  </div>
                </div>
            </div>
            </div>
        <Particles className="z-0 absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
        </div>
    );
}

