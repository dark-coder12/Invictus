import React, { useState } from "react";
import bis from "../Assets/pictures/bis.jpg";
import iz from "../Assets/pictures/iz.jpg";

const MyConnections = () => {
  const connections = [
    {
      icon: bis,
      name: "Bisma-ashar246"
    },
    {
      icon: iz,
      name: "darkcoder-12"
    },
    {
      icon: iz,
      name: "darkcoder-12"
    },
    {
      icon: bis,
      name: "Bisma-ashar246"
    },
    {
      icon: bis,
      name: "Bisma-ashar246"
    },
    {
      icon: iz,
      name: "darkcoder-12"
    },
    {
      icon: iz,
      name: "darkcoder-12"
    },
    {
      icon: bis,
      name: "Bisma-ashar246"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="grid grid-rows-8 grid-cols-2 gap-6 par rounded-md and bg-[#2B0202] p-3">

      {connections.map((connection, index) => (
        <div className="relative" key={index}>
          <img
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="w-[20] h-[20] rounded-full"
            style={{
              filter: hoveredIndex === index ? "brightness(10%)" : "brightness(40%)",
              transition: "filter 0.3s ease-in-out"
            }}
            src={connection.icon}
            alt="connection"
          />

          {hoveredIndex === index && (
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-white bg-black p-[2%] rounded-md"
              style={{ zIndex: 1 }}
            >
              View
            </button>
          )}

          <p className="text-[0.65rem] mt-3 underline hover:underline-offset-4">
            {connection.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyConnections;
