import React, { useState, useEffect }from "react";
import HoverRating from "./HoverRating";
import ReadRating from "./ReadRating";

import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

function CertificationDetails({certification}) {
  
  const navigate = useNavigate();

  const { id } = useParams();

  const [currentCertification, setCurrentCertification] = useState({});

  useEffect(() => {

    const fetchCurrentCertification = async () => {

      console.log("Hello")
      const certification = await axios.get(`http://localhost:8080/get-certification/${id}`);

      console.log(certification.data)
      setCurrentCertification(certification.data);
    };
    fetchCurrentCertification();
  }, []);


  const handleCertified = () => {

    navigate(`/mcq-test/${id}`)
  }

  return (
    <div className="p-6 pt-[2%]">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <h2 class="text-5xl font-bold mb-12 ">{currentCertification.name}</h2>
        <p class="mb-8 text-justify italic font-thin pr-4">
          {currentCertification.description}
        </p>
        <button class="bg-[#3a0303] hover:bg-[#2B0202] text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleCertified}>
          Get certified now!
        </button>
        <p class="mb-4">
          Currently Attempted:{" "}
          <span id="enroll-count" class="font-bold">
            {currentCertification.currentlyAttempted}
          </span>
        </p>
      </div>
      <div class="w-full lg:w-1/2 p-6">
        <img className='rounded-xl'
          src={currentCertification.bg}
          style={{ verticalAlign: "middle", marginTop: "10%" }}
        />
      </div>
    </div>
    <div>
      <div className="flex pt-[5%]">
        <div className="w-1/2 pr-2 font-thin">
          <h3 class="text-2xl font-bold mb-2">Certification Benefits</h3>
          <ul class="list-decimal list-inside">
            {currentCertification.certificationBenefits &&
              currentCertification.certificationBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
          </ul>
        </div>
        <div className="w-1/2 pl-2 border-l-2 border-white-50 text-center">
          <h3 class="text-2xl font-bold mb-2">Certification Reviews</h3>
          <ReadRating />
        </div>
      </div>
    </div>
  </div>
  );
}

export default CertificationDetails;
