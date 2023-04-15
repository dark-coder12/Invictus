import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { FaRobot } from "react-icons/fa";

const API_KEY = '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';
const model = "text-davinci-002";

const configuration = new Configuration({
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

const fetchData = async (input) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `Write a code for: "${input}"`,
      model: model,
      max_tokens: 500,
      n: 1,
      stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text;
};

async function completeCode(input) {
  const completion = await openai.createCompletion({
    engine: "davinci",
    prompt: `Write a code for: "${input}"`,
    maxTokens: 500,
  });
  return completion.data.choices[0].text;
}

function CodeSuggestionForm() {
  const [input, setInput] = useState("");
  const [completedCode, setCompletedCode] = useState("");

  async function handleClick() {
    try {
      const completedCode = await fetchData(input);
      const letters = completedCode.split("");
      let currentLetterIndex = 0;
      const intervalId = setInterval(() => {
        setCompletedCode(prevCompletedCode => prevCompletedCode + letters[currentLetterIndex]);
        currentLetterIndex++;
        if (currentLetterIndex === letters.length) {
          clearInterval(intervalId);
        }
      }, 150);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center pt-[10%]">
      <h1 className="text-white text-4xl font-bold mb-8">Invictus | GPT-4</h1>
      <div className="max-w-lg w-full px-4 py-6 bg-[#1a0101] rounded-lg">
        <div className="flex items-center mb-4">
          <FaRobot className="w-8 h-8 mr-2" />
          <h2 className="text-xl font-bold">X12 Code Bot</h2>
        </div>
        <p className="mb-8">Meet X12, the very own code bot of Invictus! Write down a phrase and watch X12 code it for you!</p>
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={5}
          className="w-full bg-[#040404] border border-gray-700 rounded-lg p-2 mb-4"
          placeholder="Hey User! Add your code prompt here..."
        />
        <button
          className="text-[#3a0303] bg-white py-2 px-4 rounded-lg mb-4"
          onClick={handleClick}
        >
          Code it!
        </button>
        {completedCode && (
          <div className="bg-[#040404] rounded-lg p-2 mb-4 overflow-auto max-h-60">
            <code>{completedCode}</code>
          </div>
        )}
      </div>
    </div>
  );
}



export default CodeSuggestionForm;
