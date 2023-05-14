import React, { useState } from "react";
import BackgroundVideo from "./BackgroundVideo";
import FirebaseAuth from "./firebaseAuth";
import InputField from "./inputField";
import PasswordField from "./passwordField";

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function SignUpForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleLogin (){
    navigate('/signin');
  }

  const handleSignUp = (e) => {
    e.preventDefault();
  
    
    axios.post('http://localhost:8080/signup', {
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
      userName
    })
    .then((response) => {

      if(response.data == 'user_saved'){
        alert('You have been successfully logged in!');
      }
    })
    .catch((error) => {
      
      if(error.response.data == 'password_error'){
        alert('Passwords do not match');
      }
    });
  };


  return (
    <div className="font-mono text-white bg-black bg-opacity-60 rounded-xl shadow-lg flex">
      <div className="h-[40rem] w-1/2">
        <BackgroundVideo />
      </div>

      <div className="w-1/2 p-4 flex flex-col justify-center ">
        <h2 className="text-center text-2xl font-bold mb-4">Sign up</h2>

        <form className="px-5">
          <InputField
            htmlFor="firstName"
            text="First Name"
            name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            id="firstName"
            type="text"
            placeholder="e.g. Iz"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <InputField
            htmlFor="lastName"
            text="Last Name"
            name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            id="lastName"
            type="text"
            placeholder="e.g. X12"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <InputField
            htmlFor="email"
            text="Email"
            name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            id="email"
            type="email"
            placeholder="e.g. izx12@hotmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            htmlFor="username"
            text="User Name"
            name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            id="username"
            type="text"
            placeholder="e.g. notyouraveragecoder"
            value = {userName}
            onChange = {(e) => setUserName(e.target.value)}
          />

          <PasswordField
            name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            type="password"
            placeholder="*******"
            value1 = {password}
            onChange1={(e) => setPassword(e.target.value)}
            value2 = {confirmPassword}
            onChange2={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="mt-4 pt-4 text-center flex justify-center">
            <button className='flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white opacity-90 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' onClick={handleSignUp}>Sign Up</button>
          </div>
          <div className="text-center pt-5">
          <FirebaseAuth handleLogin={handleLogin} />
          </div>

          <div className="mt-4">
            <p className="text-center">
              Already have an account?
              <button className="text-blue-500 hover:text-blue-700" onClick = {handleLogin}>
                Login here instead
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpForm;
