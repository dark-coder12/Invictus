import React, { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const MyConnections = ({user}) => {
 
  const uID = user;

  const navigate = useNavigate();

  const [followedIDs, setFollowedIDs] = useState([]);

  const visitExisting = (index) => {
      navigate(`/connection/${index}`)
  }

  useEffect(() => {

    const fetchUserConnections = async () => {
      try {
      
        const response = await axios.get(`http://localhost:8080/get-user-connections/${uID}`);
        const result = response.data;

        setFollowedIDs(result);
        console.log(followedIDs)

      } catch (error) {
        console.error(error);
      }
    };

    fetchUserConnections();
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="grid grid-rows-8 grid-cols-2 gap-6 par rounded-md and bg-[#2B0202] p-3">

      {!followedIDs && <p>You have no connections yet.</p>}
      {followedIDs.map((connection, index) => (
        <div className="relative" key={index}>
          <img
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="w-[20] h-[20] rounded-full"
            style={{
              filter: hoveredIndex === index ? "brightness(10%)" : "brightness(40%)",
              transition: "filter 0.3s ease-in-out"
            }}
            src={connection.imgUrl}
            alt="connection"
            onClick={() => visitExisting(connection.userID)}
          />

          <p className="text-[0.65rem] mt-3 underline hover:underline-offset-4">
            {connection.firstName}  &nbsp;
            {connection.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyConnections;
