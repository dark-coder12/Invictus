import LeftNav from "../../Components/LeftNav";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Avatar, Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditProfileModal from "../../Components/EditProfileModal";
import { options } from "../../Assets/code/options";

function Profile() {
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

        <div className="bg-[#000000] bg-opacity-70 h-full w-[65%] flex flex-col items-center justify-center gap-10">
          <div className="w-100 flex items-center justify-center">
            <div className="w-50 m-20 flex flex-col items-center justify-center">
              <Avatar
                sx={{ width: 100, height: 100 }}
                className="hover:border-4"
                alt="Travis Howard"
                src={localStorage.getItem('imgUrl')}
              />
              <h1 className="text-center p-10">{localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName')}</h1>
              <div className="mb-10">
                <EditProfileModal
                  username={localStorage.getItem('userName')}
                  email={localStorage.getItem('email')}
                />
              </div>
              <Button variant="varient" color="error">
                Delete Account
              </Button>
            </div>

            <div className="h-50  bg-[#000000] bg-opacity-70 flex-column">
              <h1>
                <b>Personal Information</b>
              </h1>
              <br></br>

              <div className="flex">
                <Avatar
                  sx={{ width: 25, height: 25 }}
                  className="hover:border-4 mr-2"
                  alt="Travis Howard"
                  src={localStorage.getItem('imgUrl')}
                />
                <small className="text-center">{localStorage.getItem('userName')}</small>
              </div>

              <div className="flex mt-2">
                <Avatar sx={{ width: 25, height: 25 }}>@</Avatar>
                <small className="ml-2">{localStorage.getItem('email')}</small>
              </div>
              <br></br>

              <h1>Education</h1>
              <br></br>

              <small style={{ color: "#3A0303", backgroundColor: "white" }}>
                Doctor of Philosophy in Software Project Management
              </small>
              <br></br>
              <small>Lahore University of Management - 2028</small>
              <hr></hr>
              <br></br>

              <small style={{ color: "#3A0303", backgroundColor: "white" }}>
                Masters in Software Project Management
              </small>
              <br></br>
              <small>Lahore University of Management - 2026</small>
              <hr></hr>
              <br></br>

              <small style={{ color: "#3A0303", backgroundColor: "white" }}>
                Bachelors of Science in Software Engineering
              </small>
              <br></br>
              <small>Fast-NUCES - 2024</small>
              <hr></hr>
              <br></br>

              <h1>Technical Skills</h1>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Fab
                  style={{
                    margin: "1%",
                    color: "white",
                    backgroundColor: "#3A0303",
                  }}
                  variant="extended"
                  sx={{ width: 150, height: 25 }}
                >
                  OOP
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
                  Blockchain
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
                  UI / UX
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
                  NLP
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
                  AI
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
                  Web Dev
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
                  App Dev
                </Fab>
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

export default Profile;
