import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import FirebaseAuth from './firebaseAuth';
import InputField from './inputField';
import PasswordField from './passwordField';

function SignUpForm() {
  return (

    <div className="font-mono text-white bg-black bg-opacity-60 rounded-xl shadow-lg flex">
      <div className= "h-[40rem] w-1/2">
        <BackgroundVideo/>
      </div>

      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-center text-2xl font-bold mb-4">Sign up</h2>

        <form className="px-5">

          <InputField htmlFor = "firstName" text = "First Name" name = "appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id = "firstName" type = "text" placeholder= "e.g. Iz"/>

          <InputField htmlFor = "lastName" text = "Last Name" name = "appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id = "lastName" type = "text" placeholder= "e.g. X12"/>

          <InputField htmlFor = "email" text = "Email" name = "appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id = "email" type = "email" placeholder= "e.g. izx12@hotmail.com"/>

          <InputField htmlFor = "username" text = "User Name" name = "appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id = "username" type = "text" placeholder= "e.g. notyouraveragecoder"/>
        
          <PasswordField name = "appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type = "password" placeholder= "*******"/>

          <div className="text-center pt-5">
          <FirebaseAuth/>
          </div>
        
          <div className="mt-4 pt-12">
            <p className="text-center">
              Already have an account?{' '}
              <a
                className="text-blue-500 hover:text-blue-700"
                href="#"
              >
                Login here instead
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpForm;
