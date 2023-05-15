import React from "react";
import { useNavigate } from "react-router-dom";

export default function MeetUpCard({
  date,
  imgSrc,
  name,
  conductedBy,
  attending,
  description,
  time,
  location,

}) {

  const navigate = useNavigate();

  const manageNavigate = () => {
    localStorage.setItem('meetUpName',name)
    navigate('/meetupinfo');
  }

  return (
    <div className="border flex glassmorph p-2 m-6" onClick={manageNavigate}>
      <div
        style={{ borderRight: "1px solid white" }}
        className="p-2 flex flex-col justify-center w-1/4"
      >
        <img className="rounded-xl m-4" src={imgSrc}></img>
      </div>
      <div className="m-2 w-4/5">
        <div className="flex">
          <h1>{date}</h1>
          &nbsp;
          <h1>{time}</h1>
        </div>
        <br></br>
        
        <h1>{name}</h1>    
        <div className="flex">
          <h1>{conductedBy}</h1>
          &nbsp;
          <h1>{location}</h1>
        </div>
        <br></br>

        <h1>{description}</h1>
        <br></br>
        <small>{attending} Attendees</small>
      </div>
    </div>
  );
}
