import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { useState } from "react";
  
  export default function CertificationCard({ title, image, mcqNum, description }) {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <Card
        shadow={false}
        className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://zaltek.co.uk/wp-content/uploads/2022/08/fotis-fotopoulos-DuHKoV44prg-unsplash-scaled-1.jpeg')] bg-cover bg-center opacity-[100]"
          style={{
            filter: isHovered ? "brightness(50%)" : "brightness(100%)",
            transition: "filter 0.3s ease-in-out",
          }}
        >
          <div
            className={`${
              isHovered ? "to-bg-black-90" : "to-bg-black-10"
            } absolute inset-0 h-full w-full bg-gradient-to-t`}
          >
            <div
              className={`${
                isHovered ? "h-30" : "h-0"
              } w-full absolute bottom-0 left-0 bg-black`}
            >
              <Typography variant="body1" className="text-white py-2 px-4">
                 {description}
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <div className="flex items-center justify-center mb-[10%]">
            <Typography
              variant="h2"
              color="white"
              className=" font-medium leading-[1.5]"
            >
              {title}
            </Typography>
            <Avatar
              style={{ height: "100%" }}
              variant="circular"
              alt="candice wu"
              src={image}
            />
          </div>
  
          <Typography variant="h5" className="mb-4 text-gray-400">
            MCQs: {mcqNum}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  