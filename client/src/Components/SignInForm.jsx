import React, {useState} from "react";
import BackgroundVideo from "./BackgroundVideo";
import FirebaseAuth from "./firebaseAuth";
import InputField from "./inputField";
import SinglePassword from "./SinglePassword";

import axios from "axios";

import { useNavigate } from 'react-router-dom';

function SignInForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp (){
    navigate('/signup');
  }


  const handleSignIn = (e) => {

    e.preventDefault();

    axios.post('http://localhost:8080/signin', {
      email,
      password: password.trim()
    })

    .then((response) => {

      if (response.data == 'correct_credentials') {

        alert('You have been successfully logged in!');
        localStorage.setItem('authenticated', true.toString());
        navigate('/home');
      } 
    })
    .catch((error) => {

      if (error.response.data == 'user_does_not_exist') {

        alert('User not found');
      } else if (error.response.data == 'password_incorrect') {

        alert('Incorrect password');
      }
      console.log(error);
    });
  };

  return (
    <div className="font-mono text-white bg-black bg-opacity-60 rounded-xl shadow-lg flex">
      <div className="h-[40rem] w-1/2">
        <BackgroundVideo />
      </div>

      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-center text-2xl font-bold mb-4">SignIn</h2>

        <form className="px-5">
          <InputField
            htmlFor="email"
            text="Email"
            name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            id="email"
            type="email"
            placeholder="e.g. izx12@hotmail.com"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
          />

          <SinglePassword
            name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            type="password"
            placeholder="*******"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
          />

          <div className="mt-4 pt-4 text-center flex justify-center">
            <button className='flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white opacity-90 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' onClick={handleSignIn}>Sign In</button>
          </div>
          <div className="text-center pt-5">
            <FirebaseAuth />
          </div>

          <div className="mt-4 pt-12">
            <p className="text-center">
              Don't have an account?{" "}
              <button className="text-blue-500 hover:text-blue-700" onClick = {handleSignUp}>
                Signup here instead
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignInForm;
