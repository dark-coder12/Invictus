import CertificationCard from "./CertificationCard";

import pythonLogo from "../Assets/pictures/pythonLogo.png";
import javaLogo from "../Assets/pictures/javaLogo.png";
import reactLogo from "../Assets/pictures/reactLogo.png";
import nodeLogo from "../Assets/pictures/nodeLogo.png";
import figmaLogo from "../Assets/pictures/figmaLogo.png";
import mongoDBLogo from "../Assets/pictures/mongoDBLogo.png";
import mySQLLogo from "../Assets/pictures/mySQLLogo.png";

function CertificationsList() {

  const certifications = [
    {
      title: 'Java',
      image: javaLogo,
      mcq: 10,
      description: 'Basic-Advanced Java concepts from OOP to Graphics3D',
      bg: 'https://img1.wallspic.com/crops/8/8/2/3/6/163288/163288-logo_java_full_stack-java-programming_language-javascript-standing-3840x2160.png'
    },
    {
      title: 'React',
      image: reactLogo,
      mcq: 15,
      description: 'A complete assessment of Hooks, State, and Props',
      bg: 'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg'
    },
    {
      title: 'Node.js',
      image: nodeLogo,
      mcq: 10,
      description: 'Learn to build scalable server-side applications with Node.js',
      bg: 'https://c4.wallpaperflare.com/wallpaper/361/665/85/node-js-hexagon-wallpaper-thumb.jpg'
    },
    {
      title: 'MongoDB',
      image: mongoDBLogo,
      mcq: 10,
      description: 'A comprehensive test on NoSQL database and MongoDB queries',
      bg: 'https://wallpapercave.com/wp/wp8724850.jpg'
    },
    {
      title: 'Figma',
      image: figmaLogo,
      mcq: 5,
      description: 'Test your skills on UI/UX design and Figma design tool',
      bg: 'https://i.pinimg.com/736x/ac/8b/85/ac8b85d7975f92ca36d48ce1463b6320.jpg'
    },
    {
      title: 'Python',
      image: pythonLogo,
      mcq: 10,
      description: 'An assessment of fundamental to advanced concepts of Python programming',
      bg: 'https://c4.wallpaperflare.com/wallpaper/873/975/781/python-programming-minimalism-grey-technology-hd-wallpaper-preview.jpg'
    }    
  ];
  

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-[90%] h-[60%]">
        {certifications.map(certification => (
          <CertificationCard
            title={certification.title} 
            image = {certification.image}
            mcqNum={certification.mcq}
            description={certification.description}
            bg = {certification.bg}
          />
        ))}
      </div>
    </div>
  );
}

export default CertificationsList;
