import React from "react";

export default function MeetUpCard({
  date,
  imgSrc,
  eventName,
  conductedBy,
  attending,
  description,
}) {
  return (
    <div className="border flex glassmorph p-2">
      <div
        style={{ borderRight: "1px solid white" }}
        className="p-2 flex flex-col justify-center w-1/4"
      >
        <img className="rounded-xl m-4" src={imgSrc}></img>
      </div>
      <div className="m-2 w-4/5">
        <h1>{date}</h1>
        <h1>{eventName}</h1>
        <h1></h1>
        <h1>{conductedBy}</h1>
        <h1>{description}</h1>
        <br></br>
        <small>{attending} Attendees</small>
      </div>
    </div>
  );
}
