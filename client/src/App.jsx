import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Landing, Signup, Home, CertificationLanding, AllCertifications, MCQTest, Certification, Checkout,Profile, MeetUp, Signin, MeetUpInfo, BlogPosts, AllCommunities, Community, AllConnections, OneConnection, VideoCall } from './Pages';

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/home' element={<Home/>} />
        <Route path="/certification-landing" element={<CertificationLanding />} />
        <Route path="/all-certifications" element={<AllCertifications />} />
        <Route path="/mcq-test" element={<MCQTest />} />
        <Route path="/certification/:id" element={<Certification />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/meetup" element={<MeetUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/meetup/:id" element={<MeetUpInfo />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path="/all-communities" element={<AllCommunities />} />
        <Route path="/community/:id" element={<Community />} />
        <Route path="/all-connections" element={<AllConnections />} />
        <Route path="/connection/:id" element={<OneConnection />} />
        <Route path = "/video-call" element = {<VideoCall/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;