import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";

import pythonLogo from "../../Assets/pictures/pythonLogo.png";
import javaLogo from "../../Assets/pictures/javaLogo.png";
import reactLogo from "../../Assets/pictures/reactLogo.png";
import nodeLogo from "../../Assets/pictures/nodeLogo.png";
import figmaLogo from "../../Assets/pictures/figmaLogo.png";
import mongoDBLogo from "../../Assets/pictures/mongoDBLogo.png";
import mySQLLogo from "../../Assets/pictures/mySQLLogo.png";
import displayPicture from "../../Assets/pictures/display-picture.jpg";
import { options } from "../../Assets/code/options";

const Certification = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">

        <div className ='w-[25%]'>
        <LeftNav/>
        </div>


        <div className="bg-[#000000] bg-opacity-70 h-full w-[85%] flex flex-col pt-5 gap-10 overflow-y-auto min-w-[75%] ml-[10%]">

        <div className='fullScreens'>
            <div className = 'flex flex-row w-full'>
                <div class="rounded-full bg-gray-100 flex flex-row items-center p-2 pl-5 w-[80%]">
                <svg
                    class="svg-icon search-icon left-2 h-6 w-6 text-gray-500"
                    aria-labelledby="title desc"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19.9 19.7"
                >
                    <title id="title">Search Icon</title>
                    <desc id="desc">A magnifying glass icon.</desc>
                    <g class="search-path" fill="none" stroke="#848F91">
                    <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                    <circle cx="8" cy="8" r="7" />
                    </g>
                </svg>
                <input
                    type="text"
                    class="w-full rounded-full bg-transparent focus:outline-none focus:ring-0 pl-4 font-[100] text-sm"
                    placeholder="I want to learn XYZ!"
                />
            
                </div>
                <button class="bg-[#3a0303] text-white rounded-md py-[0.7] px-[0.7] ml-5 w-[8rem]">
                    Let's Learn!
                </button>
            </div>
           
            <div className="flex flex-col w-[60%] pt-[20%]">
                <h1 className="text-5xl m-0 pb-16">Who says learning has limits?</h1>
                <h1 className="text-l p-0 m-0 w-[60%] pb-2 leading-5">
                Enroll in one of Invictus' high demand courses right now.
                </h1>
                <p className ='font-[100] text-sm'>Starting at just <p className='underline inline font-[600]'>800 PKR!</p></p>
               
                <div className = 'flex flex-row pt-4'>
                   
                    <button class="bg-[#3a0303] text-white rounded-full py-1 px-2 w-[8rem]">
                        Learn More
                    </button>
                    <button class="bg-[#3a0303] text-white rounded-full py-1 px-2 ml-5 w-[9rem]">
                        Go to Courses
                    </button>
                </div>
            </div>
        </div>
            
            <div className = 'fullScreens'>

                <div className ='w-[60%]'>
                    <h1 className="text-5xl m-0 pb-16">Invictus | The Certification Stack</h1>
                    <h1 className="text-l p-0 m-0 w-[60%] pb-2 leading-5 text-justify">
                    100% accredited MCQ based standardized tests to help you reach excellence in React JS, Python, Java and much more.
                    </h1>
                </div>
                <div className = 'mt-20 font-[500] p-3 px-5 shadowColor mr-[15%] ml-[5%] mb-[7%]'>
                    <p className  ='text-justify'>
                    Our certifications are well researched and objective to help save your time while bringing you with the highest quality of challenging questions each day, get certified with <p className = 'inline font-[700]'>Invictus</p> now.
                    </p>

                    <div className ='mt-5 w-full flex flex-row items-center justify-center gap-4 pb-3'>
                        <img className = 'w-20' src = {nodeLogo}/>
                        <img className = 'w-20' src = {pythonLogo}/>
                        <img className = 'w-20' src = {mongoDBLogo}/>
                        <img className = 'w-12' src = {figmaLogo}/>
                    </div>
                    <div className ='mt-5 w-full flex flex-row items-center justify-center gap-4 pb-2'>
                       
                        <img className = 'w-20' src = {javaLogo}/>
                        <img className = 'w-20' src = {reactLogo}/>
                        <img className = 'w-20' src = {mySQLLogo}/>
                    </div>
                </div>

                <div className ='w-[60%]'>
                    <h1 className="text-3xl m-0 pb-16 font-[300] underline">Don't believe us? Look at what others have to say</h1>
                    <h1 className="text-5xl m-0 pb-16">Invictus | The Reviews</h1>

                </div>

                <div className = 'flex flex-row justify-end mb-5'>
                   <div className = 'bg-white w-[60%] text-gray-900 border-black rounded-md'>
                    <div className = 'flex flex-row items-center px-10 py-5 gap-5'>
                        <p className = ' font-[200] text-sm text-justify italic'><strong className = 'text-4xl reviewFont'>"</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I recently took the Java certification MCQ-based exam offered by Invictus and was thoroughly impressed by the quality of the questions and the level of difficulty. The exam was well-structured and covered a broad range of topics, ensuring that my knowledge of Java was truly put to the test."</p>

                        <div className = 'flex flex-col gap-2 items-center'>
                        <img className = 'w-[50%] rounded-full' src = {displayPicture}/>

                        <p><strong>Ash ZI</strong></p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className = 'flex flex-row justify-start mb-5'>
                   <div className = 'bg-white w-[60%] text-gray-900 border-black rounded-md'>
                    <div className = 'flex flex-row items-center px-10 py-5 gap-5'>

                        <div className = 'flex flex-col gap-2 items-center'>
                        <img className = 'w-[50%] rounded-full' src = {displayPicture}/>

                        <p><strong>Nick</strong></p>
                        </div>
                        <p className = ' font-[200] text-sm text-justify italic'><strong className = 'text-4xl reviewFont'>"</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I found the exam to be challenging but fair, and I feel that it accurately reflected my understanding of Java. Overall, I would highly recommend Invictus' Java certification program to anyone looking to further their knowledge and skills in Java programming."</p>
                    </div>
                  </div>
                </div>
      

                <div className = 'flex flex-row justify-center'>
                <button class="text-white py-1 px-2 w-[70%] text-2xl underline font-[100]">
                            Go to Courses
                </button>
            </div>
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

export default Certification;
