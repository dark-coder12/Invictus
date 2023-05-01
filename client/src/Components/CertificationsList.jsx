import CertificationCard from "./CertificationCard";
import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CertificationsList() {
  
  const navigate = useNavigate();

  const [certifications, setCertifications] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8080/get-certifications')

      .then((response) => {
      
        setCertifications(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const handleOnClick = (index) => {

    console.log(index);
    navigate(`/certification/${index}`);
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-[90%] h-[60%]">
        {certifications.map((certification, index) => (
          <CertificationCard
            title={certification.title}
            image={certification.image}
            mcqNum={certification.mcq}
            description={certification.description}
            bg={certification.bg}
            handleOnClick = {() => handleOnClick(index+1)}
          />
        ))}
      </div>
    </div>
  );
}

export default CertificationsList;
