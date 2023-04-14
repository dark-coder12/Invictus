import React, { useState, useEffect } from "react";
import MCQ from "./MCQ";

function MCQList() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(15); 
  const [showTimerEnded, setShowTimerEnded] = useState(false);

  useEffect(() => {

    const intervalId = setInterval(() => {
        if(timer > 0){
            setTimer((prevTimer) => prevTimer - 1);
        }else{
            clearInterval(intervalId);
        }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);


  const handleOptionSelect = () => {

    var delayInMilliseconds = 300; 

    setTimeout(function() {
        if (currentQuestion < questions.length - 1) {

            setCurrentQuestion(currentQuestion + 1);
          }
    }, delayInMilliseconds);

  };

  const questions = [
    {
      question: 'What is React?',
      options: ['A library for building user interfaces', 'A server-side framework', 'A language for building mobile apps'],
      answer: 'A library for building user interfaces'
    },
    {
      question: 'What are React components?',
      options: ['Reusable pieces of UI', 'Functions that return React elements', 'Both of the above'],
      answer: 'Both of the above'
    },
    {
      question: 'What is JSX?',
      options: ['A JavaScript extension for writing HTML-like code', 'A new programming language', 'An abbreviation for JavaScript XML'],
      answer: 'A JavaScript extension for writing HTML-like code'
    },
    {
      question: 'What is state in React?',
      options: ['A JavaScript object that stores a component\'s data', 'A way to render a component on the server', 'A method for updating the DOM'],
      answer: 'A JavaScript object that stores a component\'s data'
    },
    {
      question: 'What is the Virtual DOM in React?',
      options: ['A lightweight representation of the actual DOM', 'A server-side rendering tool', 'A new kind of HTML'],
      answer: 'A lightweight representation of the actual DOM'
    },
    {
      question: 'What is the role of props in React?',
      options: ['A way to pass data from parent to child components', 'A way to store component data', 'A method for styling components'],
      answer: 'A way to pass data from parent to child components'
    },
    {
      question: 'What is the difference between state and props?',
      options: ['State is managed within a component, while props are passed down from a parent component', 'State and props are the same thing', 'Props are managed within a component, while state is passed down from a parent component'],
      answer: 'State is managed within a component, while props are passed down from a parent component'
    },
    {
      question: 'What is the purpose of React Router?',
      options: ['A way to manage client-side routing in a single-page application', 'A server-side rendering tool', 'A method for styling components'],
      answer: 'A way to manage client-side routing in a single-page application'
    },
    {
      question: 'What are React Hooks?',
      options: ['A way to use state and other React features without writing classes', 'A new kind of component', 'A way to style React components'],
      answer: 'A way to use state and other React features without writing classes'
    },
    {
      question: 'What is the React testing library?',
      options: ['A library for testing React components', 'A way to manage component state', 'A way to style React components'],
      answer: 'A library for testing React components'
    }
  ];

  return (
    <div className={`container mx-auto py-8 ${showTimerEnded ? 'bg-black bg-opacity-50' : ''}`}>
      {showTimerEnded && (
        <div className="fixed inset-0 flex items-center justify-center text-white">
          <div className="text-4xl font-bold">Timer Ended</div>
        </div>
      )}
      {timer > 0 && <div className="flex flex-col">
        <div className="text-right text-lg font-medium mb-4">
          Time Remaining: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
        </div>
        <MCQ
          question={questions[currentQuestion].question} 
          options={questions[currentQuestion].options}
          answer={questions[currentQuestion].answer}
          onOptionSelect={handleOptionSelect}
        />
      </div>
      }
      {timer == 0 && 
      <div>
        <div class="pl-[5%] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div class="bg-black rounded-lg p-8 text-white text-center">
    <h1 class="text-3xl font-bold mb-4">Timer Ended!</h1>
    <button class="bg-[#3a0303] rounded-md py-2 px-4 hover:bg-[#2a0202]" onClick={() => console.log('Calculate Score')}>Calculate Score</button>
  </div>
</div>

      </div>
      }
    </div>
  );
}

export default MCQList;
