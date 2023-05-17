import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MCQ from "./MCQ";

import {useNavigate } from 'react-router-dom';


function MCQList() {

  const [mcq, setMCQ] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(15);
  const [showTimerEnded, setShowTimerEnded] = useState(false);
  const [score, setScore] = useState(null);
  const [userChoices, setUserChoices] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(`http://localhost:8080/get-mcq-list/${id}`);
      setMCQ(response.data);
    };
    fetchQuestions();
  }, [id]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        clearInterval(intervalId);
        setShowTimerEnded(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleOptionSelect = (selectedOption) => {
    setUserChoices((prevUserChoices) => {
      const updatedChoices = [...prevUserChoices];
      updatedChoices[currentQuestion] = selectedOption;
      return updatedChoices;
    });
  
    var delayInMilliseconds = 300;
    setTimeout(function () {
      if (currentQuestion < mcq.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, delayInMilliseconds);
  };
  

  useEffect(() => {
    if (showTimerEnded) {
      let correctAnswers = 0;
      for (let i = 0; i < mcq.questions.length; i++) {

        console.log(mcq.questions[i].answer, userChoices[i])
        if (mcq.questions[i].answer === userChoices[i]) {
          correctAnswers++;
        }
      }

      if(correctAnswers >= 6){
         
        const percentage = (correctAnswers / mcq.questions.length) * 100;

        addCertification(percentage);

      }
      setScore(correctAnswers);
      setShowScore(true);
    }
  }, [showTimerEnded, userChoices, mcq]);

  const handlePurchaseCertificate = () => {
    
    navigate('/checkout');
  }

  const addCertification = async (percentage) => {

    const userID = localStorage.getItem('userID');

    const certificationName = mcq.category;
 
    const url = 'http://localhost:8080/add-certification';
    const data = { userID, certificationName, percentage };
  
    try {
      const response = await axios.put(url, data);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`container mx-auto py-8 ${
        showTimerEnded ? "bg-black bg-opacity-50" : ""
      }`}
    >
    
  {timer > 0 && mcq && (

    <div className="flex flex-col">
      <div className="text-right text-lg font-medium mb-4">

        Time Remaining: {Math.floor(timer / 60)}:

        {(timer % 60).toString().padStart(2, "0")}
      </div>
      <MCQ
        question={mcq.questions[currentQuestion].question}
        options={mcq.questions[currentQuestion].options}
        answer={mcq.questions[currentQuestion].answer}
        onOptionSelect={handleOptionSelect}
      />
    </div>
  )}
  {timer === 0 && showScore && (
  <div>
    <div class="pl-[5%] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 flex flex-col justify-between pt-[10%] pb-[10%]">
      <div class="bg-black rounded-lg p-8 text-white text-center">
        <h1 class="text-5xl font-bold mb-4">Timer Ended!</h1>
        <div className={`text-xl font-bold mb-4 rounded-xl p-4`}>
          {score >= 6 ? (
            <>
              <p>Congratulations, you passed the quiz!</p>
              
            </>
          ) : (
            <p>Sorry, you did not pass the quiz.</p>
          )}
          <p className={`flex flex-row justify-center rounded-md p-4 m-4 ${score >= 6 ? 'bg-green-500' : 'bg-red-500'}`}>Score: {score}</p>
        </div>
      </div>
      {score >= 6 && <div>
   <button className="bg-[#2b0202] hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-4" onClick={handlePurchaseCertificate}>
                Purchase Certificate
              </button>
    </div>}
    <button className="bg-[#2b0202] hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=> navigate('/all-certifications')}>
      Go To Certifications</button>
    </div> 
  </div>
)}

</div>
  )
}
;
export default MCQList;
