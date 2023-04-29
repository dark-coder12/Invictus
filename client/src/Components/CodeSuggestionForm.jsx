import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { FaRobot } from "react-icons/fa";

import LoadingSpin from "react-loading-spin";

const API_KEY = "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";
const model = "text-davinci-002";

const configuration = new Configuration({
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

const fetchData = async (input, language) => {
  try {
    const answer = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a code in ${language} for: "${input}"`,
      max_tokens: 3000,
      temperature: 0.7,
      n: 1,
    });

    const text = answer.data.choices[0].text;
    return text;
    
  } catch (err) {
    console.error(err);
  }
};



function CodeSuggestionForm() {
  
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");

  const [completedCode, setCompletedCode] = useState("");
  
  const [loading, setLoading ] = useState(false);


  async function handleClick() {
    try {
    
      setLoading(true);

      const text = await fetchData(input, language);

      setLoading(false);

      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          setCompletedCode(text.slice(0, i + 1));
        }, i * 50);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onLanguageChange = (e) => {
      setLanguage(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center pt-[3%]">
      <h1 className="text-white text-4xl font-bold mb-8">Invictus | GPT-4</h1>
      <div className="max-w-lg w-full px-4 py-6 bg-[#1a0101] rounded-lg">
        <div className="flex items-center mb-4">
          <FaRobot className="w-8 h-8 mr-2" />
          <h2 className="text-xl font-bold">X12 Code Bot</h2>
        </div>
        <p className="mb-8">
          Meet X12, the very own code bot of Invictus! Write down a phrase and
          watch X12 code it for you!
        </p>
        
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={5}
          className="w-full h-12 bg-[#040404] border border-gray-700 rounded-lg p-2 mb-4"
          placeholder="Hey User! Add your code prompt here..."
        />
        <div className='flex flex-row justify-between items-center px-4'>
        <select onChange = {onLanguageChange} className='bg-[#040404] border border-gray-700 rounded-lg p-2 mb-4'>
          <option selected hidden>Language</option>
          <option value='python'>Python</option>
          <option value='javascript'>JavaScript</option>
          <option value='c++'>C++</option>
          <option value='java'>Java</option>
        </select>

        <button
          className="text-[#3a0303] bg-white py-2 px-4 rounded-lg mb-4 hover:bg-gray-400"
          onClick={handleClick}
        >
          Code it!
        </button>
        </div>
      
        {loading && <div className="flex flex-row gap-4 justify-left items-center mb-6 mt-6">
          <p className='flex flex-inline inline-flex'>Hang on while we get the code for you!</p>
          <LoadingSpin primaryColor="#ffffff" numberOfRotationsInAnimation={2} size='30px'/>
          </div>}
        {completedCode && (
          <div className="bg-[#040404] rounded-lg p-2 mb-4 overflow-auto max-h-60">
            <pre>{completedCode}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeSuggestionForm;
