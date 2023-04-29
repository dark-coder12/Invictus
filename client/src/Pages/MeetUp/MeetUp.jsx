import React from "react";
import LeftNav from "../../Components/LeftNav";
import MeetUpCard from "../../Components/MeetUpCard";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ccs from "../../Assets/pictures/ccs.jpg";
import { options } from "../../Assets/code/options";
import fms  from '../../Assets/pictures/fms.png';
import stacks  from '../../Assets/pictures/stacks.svg';

export default function MeetUp() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 flex justify-center items-center bg-black pt-[5%] pb-[5%]">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>

        <div className="m-2 w-[85%] pl-[5%]">
          <h1 className="text-4xl pt-6 pl-6">See what's happening around?</h1>
          <p className="pt-6 pb-6 pl-6">
            Wish to attend what you like? Just register!
          </p>

          <div className="m-6">
            <MeetUpCard
              date={"April, 25 2023 . 4:30 PK PKT"}
              imgSrc={stacks}
              conductedBy={"Stack FAST Chapter . Lahore PK"}
              eventName={"BlockChain Cohort 4.0"}
              attending={4}
            />
          </div>

          <div className="m-6">
            <MeetUpCard
              date={"April, 23 2023 . 7:30 PK PKT"}
              imgSrc={ccs}
              description={
                "Meet the most influential people of Pakistan and hear their perspectives on the things that actually matter!"
              }
              conductedBy={"Career Counseling Society . FAST LHR"}
              eventName={"NUCES Talks 23"}
              attending={4}
            />
          </div>

          <div className="m-6 ">
            <MeetUpCard
              date={"April, 15 2023 . 12:30 PK PKT"}
              description={
                "Jamming session where everyone can show case their skills."
              }
              imgSrc={fms}
              conductedBy={"Fast Music Society . FAST LHR"}
              eventName={"Jamming Session"}
              attending={12}
            />
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
}
