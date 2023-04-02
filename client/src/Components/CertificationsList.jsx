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
    { title: 'Java', image: javaLogo, mcq: 10, description: 'Basic-Advanced Java concepts from OOP to Graphics3D' },
    { title: 'React', image: reactLogo, mcq: 15, description: 'A complete assessment of Hooks, State, and Props' },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] h-[60%]">
        {certifications.map(certification => (
          <CertificationCard
            title={certification.title} 
            image = {certification.image}
            mcqNum={certification.mcq}
            description={certification.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CertificationsList;
