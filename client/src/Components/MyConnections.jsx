import React from "react";
import { useState } from "react";

import bis from "../Assets/pictures/bis.jpg";
import iz from "../Assets/pictures/iz.jpg";

const MyConnections = () => {

    const connections = [
        {
            icon: bis,
            name: 'Bisma-ashar246'
        },
        {
            icon: iz,
            name: 'Bisma-ashar246'
        },
        {
            icon: iz,
            name: 'Bisma-ashar246'
        },
        {
            icon: bis,
            name: 'Bisma-ashar246'
        },
        {
            icon: bis,
            name: 'Bisma-ashar246'
        },
        {
            icon: iz,
            name: 'Bisma-ashar246'
        },
        {
            icon: iz,
            name: 'Bisma-ashar246'
        },
        {
            icon: bis,
            name: 'Bisma-ashar246'
        },
    ]

    const [isHovered, setIsHovered] = useState(false);
      
    const handleHover = () => {
        setIsHovered(true);
    };
      
    const handleLeave = () => {
        setIsHovered(false);
    };

    return(
        <div className="grid grid-rows-8 grid-cols-2 gap-6 par rounded-md and bg-[#2B0202] p-3">
        {connections.map(connection =>(

         <div className="flex flex-col">
            <img onMouseEnter={handleHover} onMouseLeave={handleLeave} className="w-[20] h-[20] rounded-full" 
                 style={{ filter: isHovered ? "brightness(10%)" : "brightness(40%)" ,  transition: "filter 0.3s ease-in-out"}} 
                 src={connection.icon} alt='connection'></img>
            
        
        
            <p className="text-[0.65rem] mt-3 underline hover:underline-offset-4">{connection.name}</p>
         </div>
            ))}
{isHovered &&  <button>
                View
              </button>
}
        </div>
        
    )
}

export default MyConnections