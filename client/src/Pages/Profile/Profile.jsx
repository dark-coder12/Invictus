import LeftNav from "../../Components/LeftNav";
import React from "react";
import { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Avatar, Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditProfileModal from "../../Components/EditProfileModal";
import { options } from "../../Assets/code/options";
import axios from "axios";

function Profile() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  const [phdDegree, setPhdDegree] = React.useState("");
  const [phdInstitute, setPhdInstitute] = React.useState("");
  
  const [mastersDegree, setMastersDegree] = React.useState("");
  const [mastersInstitute, setMastersInstitute] = React.useState("");

  const [bachelorsDegree, setBachelorsDegree] = React.useState("");
  const [bachelorsInstitute, setBachelorsInstitute] = React.useState("");

  const [skills, setSkills] = React.useState([]);
  const [skillsArr, setSkillsArr] = React.useState([]);


  useEffect(() => {
    setSkillsArr([]);
    const userID = localStorage.getItem("userID");
     axios.post("http://localhost:8080/get-skills",{
       userID: userID
     }).then((res) => {
       setPhdDegree(res.data.phdDegree);
       setPhdInstitute(res.data.phdInstitute);
       setMastersDegree(res.data.mastersDegree);
       setMastersInstitute(res.data.mastersInstitute);
       setBachelorsDegree(res.data.bachelorsDegree);
       setBachelorsInstitute(res.data.bachelorsInstitute);
       setSkills(res.data.skills);
       res.data.skills.forEach((skill) => {
         const temp = <Fab style={{margin: "1%",color: "white",backgroundColor: "#3A0303"}} variant="extended" sx={{ width: 150, height: 25 }}>{skill}</Fab>
         const tempArr = skillsArr;
         tempArr.push(temp);
         setSkillsArr(tempArr);
         console.log('Skills st to ,',skillsArr)
       });
      }).catch((err) => { 
     console.log(err);
    });
   },[]);

  const deleteUser = () => {
    alert('Are you sure you want to delete your account?');
    const userID = localStorage.getItem("userID");
    axios.delete("http://localhost:8080/delete-user",{
      userID: userID
    }).then((res) => {
      console.log(res);
      localStorage.clear();
      setSkillsArr([]);
      window.location.href = "/";
    }).catch((err) => {
      console.log(err);
    });
  }
  
  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>
        
        <div className="bg-[#000000] bg-opacity-70 h-full w-[65%] flex ">
          <div className="w-[30%] flex m-[12%] items-center">
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
                    <Button variant="varient" color="error" onClick={deleteUser}>
                      Delete Account
                    </Button>
                  </div>
          </div>


            <div className="h-50 w-[40%] bg-[#000000] mt-16 bg-opacity-70 flex-column">
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
                Doctor of Philosophy in {phdDegree}
              </small>
              <br></br>
              <small>{phdInstitute}</small>
              <hr></hr>
              <br></br>

              <small style={{ color: "#3A0303", backgroundColor: "white" }}>
                Masters in {mastersDegree}
              </small>
              <br></br>
              <small>{mastersInstitute}</small>
              <hr></hr>
              <br></br>

              <small style={{ color: "#3A0303", backgroundColor: "white" }}>
                Bachelors of Science in {bachelorsDegree}
              </small>
              <br></br>
              <small>{bachelorsInstitute}</small>
              <hr></hr>
              <br></br>

              <h1>Technical Skills</h1>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                  skillsArr
                }
                 
                
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
