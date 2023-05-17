import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, redirect } from 'react-router-dom';


import {
  Landing,
  Signup,
  Home,
  CertificationLanding,
  AllCertifications,
  MCQTest,
  Certification,
  Checkout,
  Profile,
  MeetUp,
  Signin,
  MeetUpInfo,
  BlogPosts,
  AllCommunities,
  Community,
  AllConnections,
  OneConnection,
  VideoCall,
  CodeBot,
  CheckoutSuccess,
  DownloadHandler, 
  ErrorPage
} from './Pages';

const App = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    Boolean(localStorage.getItem('authToken'))
  );

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsUserLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsUserLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/signup"
          element={<Signup handleLogin={handleLogin} isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route
          path="/signin"
          element={<Signin handleLogin={handleLogin} isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route
          path="/home"
          element={
            isUserLoggedIn ? <Home handleLogout={handleLogout}  /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/certification-landing"
          element={
            isUserLoggedIn ? <CertificationLanding /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/all-certifications"
          element={
            isUserLoggedIn ? <AllCertifications /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/mcq-test/:id"
          element={
            isUserLoggedIn ? <MCQTest /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/certification/:id"
          element={
            isUserLoggedIn ? <Certification /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/checkout"
          element={
            isUserLoggedIn ? <Checkout /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/profile"
          element={
            isUserLoggedIn ? (
              <Profile handleLogout={handleLogout} />
            ) : (
              <Navigate to="/signin" replace={true} />
            )
          }
        />
        <Route
          path="/meetup"
          element={
            isUserLoggedIn ? <MeetUp /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/meetupinfo"
          element={
            isUserLoggedIn ? <MeetUpInfo /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/blog-posts"
          element={
            isUserLoggedIn ? <BlogPosts /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/all-communities"
          element={
            // isUserLoggedIn ? <AllCommunities /> : <Navigate to="/signin" replace={true} />
            <AllCommunities />
          }
        />
        <Route
          path="/community/:id"
          element={
            // isUserLoggedIn ? <Community /> : <Navigate to="/signin" replace={true} />
            <Community />
          }
        />
        <Route
          path="/all-connections"
          element={
            isUserLoggedIn ? <AllConnections /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="connection/:id"
          element={
            isUserLoggedIn ? <OneConnection /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/video-call"
          element={
            // isUserLoggedIn ? <VideoCall /> : <Navigate to="/signin" replace={true} />
            <VideoCall/>
          }
        />
        <Route
          path="/codebot"
          element={
            isUserLoggedIn ? <CodeBot /> : <Navigate to="/signin" replace={true} />
            
          }
        />

        <Route
          path="/checkout-success"
          element={
            isUserLoggedIn ? <CheckoutSuccess /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/download-certificate"
          element={
            isUserLoggedIn ? <DownloadHandler /> : <Navigate to="/signin" replace={true} />
          }
        />

        <Route component={ErrorPage} />
        </Routes>
        </BrowserRouter>
  );
};
export default App;