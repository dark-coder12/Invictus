import Artificialis from "../Assets/pictures/Artificialis.jpg";

import { Card,CardHeader,CardBody,Typography,Avatar,} from "@material-tailwind/react";
import { useState } from "react";

const CommunityHeader = ({title , description , bg}) => {

    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleLeave = () => {
      setIsHovered(false);
    };

    return(
        <div>
    <Card
        shadow={false}
        className="relative grid h-[15rem] max-w-[450rem] items-end justify-center overflow-hidden text-center"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
       <CardHeader 
          floated={false}
          shadow={false}
          color="transparent"
       
          className="absolute inset-0 m-0 h-full w-full bg-cover bg-center opacity-[100] border-black"
          style={{
            border: 'none',
            borderRadius:'0',
            backgroundImage: {bg},
            filter: isHovered ? "brightness(10%)" : "brightness(40%)",
            transition: "filter 0.3s ease-in-out",
          }}
        >       
          <div
            className={`${
              isHovered ? "to-bg-black-90" : "to-bg-black-10"
            } absolute inset-0 h-full w-full bg-gradient-to-t`}
          >
            
          </div>
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <div className="flex items-center justify-center mb-[20%]">
            <Typography
              variant="h2"
              color="white"
              className=" font-medium leading-[1.5] pt-10"
            >
            {title}
            </Typography>
          </div>
  
        </CardBody>
        <div
              className={`${
                isHovered ? "h-20" : "h-0"
              } w-full absolute bottom-0 left-0 bg-[#010101]`}
            >
              <Typography variant="body1" className="text-white py-2 px-4">
               {description}         
              </Typography>
            </div>
      </Card>
      </div>
    )
}

export default CommunityHeader