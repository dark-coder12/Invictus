import React from "react";
import HoverRating from "./HoverRating";
import ReadRating from "./ReadRating";

function CertificationDetails() {
  return (
    <div className='p-6 pt-[2%]'>
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2">
          <h2 class="text-5xl font-bold mb-12 ">React JS</h2>
          <p class="mb-8 text-justify italic font-thin pr-4">
          A React MCQ certification is a valuable credential for web developers who want to advance their careers front-end development. By obtaining this certification, developers can demonstrate their proficiency in React and their ability to create efficient and effective user interfaces. This certification can enhance their credibility and make them stand out. 
          </p>
          <button class="bg-[#3a0303] hover:bg-[#2B0202] text-white font-bold py-2 px-4 rounded mb-4">
            Get certified now!
          </button>
          <p class="mb-4">
            Currently Attempted:{" "}
            <span id="enroll-count" class="font-bold">
              1296+
            </span>
          </p>
        </div>
        <div class="w-full lg:w-1/2 p-6">
          <img
            src="https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg"
            alt="Course image"
            class="mb-4 rounded-md inline-block align-middle"
            style={{ verticalAlign: "middle",marginTop: '10%'}}
          />
        </div>
      </div>
      <div>
        <div className="flex pt-[5%]">
          <div className="w-1/2 pr-2 font-thin">
            <h3 class="text-2xl font-bold mb-2">Certification Benefits</h3>
            <ul class="list-decimal list-inside">
  <li>Boost your React skills</li>
  <li>Advance your career</li>
  <li>Improve your resume</li>
  <li>Enhance your credibility</li>
  <li>Stand out from the competition</li>
</ul>
          </div>
          <div className="w-1/2 pl-2 border-l-2 border-white-50 text-center">
            <h3 class="text-2xl font-bold mb-2">Certification Reviews</h3>
            <ReadRating/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationDetails;
