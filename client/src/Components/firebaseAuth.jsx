import { useEffect, useState } from "react";
import googleLogo from "../Assets/pictures/googleLogo.png";
import {auth,provider} from './FirebaseAuth.config';
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

function FirebaseAuth({handleLogin}) {

  const [val,setVal] = useState('');
  const navigate = useNavigate();

  

  const addNewUser = (email,password,firstName,lastName,confirmPassword,userName,imgUrl) =>{
    console.log('In Ad new User')
       axios.post('http://localhost:8080/userexists',{
         email
       })
       .then((response)=>{
          console.log("response aya:" ,response.data);
          localStorage.setItem("userID",response.data.userID)
         if (response.data === 'user_does_not_exist'){
           console.log(email,password,firstName,lastName,confirmPassword,userName,imgUrl  )
            axios.post('http://localhost:8080/signup', {
              email,
              password,
              firstName,
              lastName,
              confirmPassword,
              userName,
              imgUrl
            }).then((response)=>{

              localStorage.setItem("userID",response.data.userID)
              
            });

          
            axios.post('http://localhost:8080/userexists',{email}).then((response)=>{
              localStorage.setItem("userID",response.data.userID)
              
            })
         }
         else {
          localStorage.setItem("userID",response.data.userID)
          
         }
       })
  }

  const  setCurrentUser = () =>{
    const userID = localStorage.getItem('userID');
    axios.get(`http://localhost:8080/get-user/${userID}`).then((response)=>{
      console.log('Setting user: ',response.data)
      localStorage.setItem('firstName',response.data.firstName)
      localStorage.setItem('lastName', response.data.lastName)
      localStorage.setItem('email',response.data.email)
      localStorage.setItem('userName', response.data.userName)
      localStorage.setItem('password',response.data.password)
      localStorage.setItem('imgUrl',response.data.imgUrl);
    })
  }

  const newfunc = (email) =>{
    console.log(email)
    console.log('vghjvhjkvbnj')
    axios.post(`http://localhost:8080/userexists`,{email}).then((response)=>{
      
      console.log('Setting user: ',response.data)
      localStorage.setItem('userID',response.data.userID);
    
  })
  }

  const handleClick = (e) =>{
    e.preventDefault();
    signInWithPopup(auth,provider).then((data)=>{
      
      const email = data._tokenResponse.email;
      const firstName = data._tokenResponse.firstName
      const lastName = data._tokenResponse.lastName
      const userName = data._tokenResponse.email.replace('@gmail.com','');
      const password = data._tokenResponse.email
      const confirmPassword = data._tokenResponse.email
      const imgUrl = data._tokenResponse.photoUrl;
      console.log(email,firstName,lastName,userName,password,imgUrl)
      localStorage.setItem('firstName',firstName)
      localStorage.setItem('lastName', lastName)
      localStorage.setItem('email',email)
      localStorage.setItem('userName', userName)
      localStorage.setItem('password',password)
      localStorage.setItem('imgUrl',imgUrl);
      addNewUser(email,password,firstName,lastName,confirmPassword,userName,imgUrl);
      newfunc(email);

      handleLogin(true)
      navigate('/Home');
    })
  }


  useEffect(()=>{
    setVal(localStorage.getItem("email")); 
  })

  return (
    <div className="flex flex-row justify-evenly items-center">
       <button onClick={(e)=>handleClick(e)} className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white opacity-90 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <img src={googleLogo} alt="Google's Logo" className="h-6 w-6 mr-2" />
        Use Google Instead
        
      </button>
      
    </div>
  );
};

export default FirebaseAuth;
