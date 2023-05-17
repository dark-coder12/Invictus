import * as React from "react";
import Button from "@mui/material/Button";
import InputField from "./inputField";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import DegreeSelector from "./DegreeSelector";
import InstituteSelector from "./InstituteSelector";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditProfileModal(props) {

  const [newUsername, setNewUsername] = React.useState(props.username);
  const [newEmail, setNewEmail] = React.useState(props.email);
  const [phdDegree, setPhdDegree] = React.useState("");
  const [phdInstitute, setPhdInstitute] = React.useState("");

  const [mastersDegree, setMastersDegree] = React.useState("");
  const [mastersInstitute, setMastersInstitute] = React.useState("");

  const [bachelorsDegree, setBachelorsDegree] = React.useState("");
  const [bachelorsInstitute, setBachelorsInstitute] = React.useState("");


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [skills,setSkills] = React.useState([]);

  const handleClose = () =>{
    var tempUserName = props.username;
    var tempEmail = props.email;
    if (newUsername !== props.username) {
      tempUserName = newUsername;
    } 
    if (newEmail !== props.email) {
      tempEmail = newEmail;
    }
    axios.put("http://localhost:8080/edit-profile", {
       userID: localStorage.getItem("userID"),
       userName: tempUserName,
       email: tempEmail,
       phdDegree: phdDegree,
       phdInstitute: phdInstitute,
       mastersDegree: mastersDegree,
       mastersInstitute: mastersInstitute,
       bachelorsDegree: bachelorsDegree,
       bachelorsInstitute: bachelorsInstitute,
       skills: skills
     }).then((res) => {
       if (res.data === 'user_updated'){
          localStorage.setItem("userName",tempUserName);
          localStorage.setItem("email",tempEmail);
          window.location.reload();
       }
       console.log(res);
    })

    setOpen(false);
  }
  

  const changeColor = (e,skill) => {
    if (e.target.style.backgroundColor !== "white") {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "#3A0303";
    } else {
      e.target.style.backgroundColor = "#3A0303";
      e.target.style.color = "white";
    }
    const tempArr = skills;
    tempArr.push(skill);
    setSkills(tempArr);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Edit Information
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            marginLeft: "25%",
            marginTop: "1%",
            backgroundColor: "white",
            overflow: "auto",
          }}
        >
          <div style={{ padding: "5%" }}>
            <h1 style={{ textAlign: "center", marginTop: "2%" }}>
              <b> Edit Profile</b>
            </h1>
            {/* Username and Email */}
            <InputField
              htmlFor="username"
              text="User Name"
              name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder={props.username}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <InputField
              htmlFor="email"
              text="Email"
              name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="emial"
              type="email"
              placeholder={props.email}
              onChange={(e) => setNewEmail(e.target.value)}
            />

            {/* Education */}

            <label className="block font-bold mb-2">Education</label>
            <div style={{ display: "flex", flexDirection: "column" }}>
           
              <div style={{ display: "flex" }}>
             
                <DegreeSelector selectFor="Phd" setVal={setPhdDegree} />
                <InstituteSelector selectFor="Institute" setVal={setPhdInstitute} />
              </div>
              <div style={{ display: "flex" }}>
                <DegreeSelector selectFor="Masters" setVal={setMastersDegree} />
                <InstituteSelector selectFor="Institute" setVal={setMastersInstitute} />

              </div>
              <div style={{ display: "flex" }}>
                <DegreeSelector selectFor="Bachelors" setVal={setBachelorsDegree} />
                <InstituteSelector selectFor="Institute" setVal={setBachelorsInstitute} />
              </div>
               
              
            </div>
        
             {/* Technical Skills  */}

            <label className="block font-bold mb-2">Technical Skills</label>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Fab
                onClick={(e) => changeColor(e,'OOP')}
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
                onClick={(e) => changeColor(e,'Blockchain')}
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
                onClick={(e) => changeColor(e,'UI/UX')}
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
                onClick={(e) => changeColor(e,'NLP')}
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
                onClick={(e) => changeColor(e,'AI')}
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
                onClick={(e) => changeColor(e,'Web Dev')}
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
                onClick={(e) => changeColor(e,'App Dev')}
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
          

             {/* Save and Cancel Buttons  */}
            <div style={{ display: "flex", padding: "2%" }}>
              <Button variant="outlined" color="success" onClick={handleClose}>
                Save
              </Button>
              <Button style={{ marginLeft: "5%" }} variant="outlined" color="error" onClick={()=> setOpen(false)} >Cancel</Button>
            </div> 
            
          </div>
        </div>
      </Modal>
    </div>
  );
}
