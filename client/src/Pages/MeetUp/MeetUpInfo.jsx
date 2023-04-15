import React from "react";
import LeftNav from "../../Components/LeftNav";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Avatar, AvatarGroup } from "@mui/material";
import Fab from "@mui/material/Fab";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "../../Assets/code/options";

export default function MeetUpInfo({}) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>

        <div className="m-6 w-[85%] border-y-2 p-2 overflow-auto">
          <div style={{ borderBottom: "1px solid white" }}>
            <h1 className="text-3xl pt-4 pb-2">Blockchain Cohort 4.0</h1>
            <div className="mt-2 mb-2">
              {/* for now the host */}
              <img src="stacks.svg"></img>
            </div>
            <div>
              <h1>Hosted By</h1>
              <h1 className="pb-4">Stacks Pakistan FAST Chapter</h1>
            </div>
          </div>

          <div className="flex justify-evenly mt-6">
            <div className="w-[50%]">
              <img
                src="stacksevent.jpg"
                className="w-[50%] rounded-2xl h-[100%]"
              ></img>
            </div>
            <div className="glassmorph w-[50%] flex flex-col justify-center">
              <div className="ml-[20%] flex flex-row">
                <DateRangeIcon />
                <h1>Monday, April 24, 2023</h1>
              </div>
              <br />
              <div className="ml-[20%] flex flex-row">
                <AccessTimeFilledIcon />
                <h1>9:30 PM to 10:30 PM PKT</h1>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div>
              <h1 className="text-2xl underline py-4">Details</h1>
              <p className="text-sm text-justify">
                We are excited to announce a free, live bootcamp event for
                students who are interested in learning about Power Apps! This
                bootcamp is organized to provide students with a comprehensive
                understanding of Power Apps and how it can be used to build
                custom business applications without writing code.
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Who is it for?</h1>
              <p className="text-sm text-justify">
                This bootcamp is perfect for students who are interested in
                pursuing a career in technology. By attending the bootcamp,
                students will gain valuable application development skills
                across Microsoft Technologies. This is an excellent opportunity
                for students to learn from a seasoned expert and gain practical
                skills that will be useful in their future careers.
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Prerequsites</h1>
              <p className="text-sm text-justify">
                No prior experience with Power Apps is required.
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Venue</h1>
              <small>FAST NUCES LAHORE</small>
              <img className="mt-4 rounded-lg" src="fast.png" />
            </div>
            <div className="mt-2">
              <h1 className="text-2xl py-4 ">Speaker</h1>
              <div className="flex">
                <Avatar
                  src={"https://avatars.githubusercontent.com/u/82564549?v=4"}
                />
                <p className="ml-2 self-center">Izzah Mujeeb</p>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl  py-4">Relevant Tags</h1>
              <div className="flex">
                <Fab
                  style={{
                    margin: "1%",
                    color: "white",
                    backgroundColor: "#3A0303",
                  }}
                  variant="extended"
                  sx={{ width: 150, height: 25 }}
                >
                  BlockChain
                </Fab>
                <Fab
                  style={{
                    margin: "1%",
                    color: "white",
                    backgroundColor: "#3A0303",
                  }}
                  variant="extended"
                  sx={{ width: 150, height: 25 }}
                >
                  Etherium
                </Fab>
                <Fab
                  style={{
                    margin: "1%",
                    color: "white",
                    backgroundColor: "#3A0303",
                  }}
                  variant="extended"
                  sx={{ width: 150, height: 25 }}
                >
                  Ether Gas
                </Fab>
              </div>
            </div>
            <div className="mt-2 mb-12">
              <h1 className="text-2xl  py-4">Attendees(4)</h1>
              <div className="flex">
                <AvatarGroup max={3}>
                  <div className="ml-2">
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/82564549?v=4"
                      }
                    />
                  </div>
                  <div className="ml-2">
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/82564549?v=4"
                      }
                    />
                  </div>
                  <div className="ml-2">
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/82564549?v=4"
                      }
                    />
                  </div>
                  <div className="ml-2">
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/82564549?v=4"
                      }
                    />
                  </div>
                </AvatarGroup>
              </div>
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
}
