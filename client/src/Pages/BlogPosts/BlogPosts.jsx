import React, { useEffect } from "react";
import Blog from "../../Components/Blog";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LeftNav from "../../Components/LeftNav";
import { Avatar } from "@mui/material";
import displayImage from "../../Assets/pictures/display-picture.jpg";
import { options } from "../../Assets/code/options";
import axios from "axios";

var bloggerDescription =
  "As a blogger, I have the amazing opportunity to share my thoughts, ideas, and experiences with a vast audience. Its truly rewarding to express myself and connect with others who share my interests through my blog.";

var blogText =
  "This is a place holder text for each blog right now. The blogs will include mostly technical writing oriented content along with guides.";

export default function BlogPosts() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  const [userDescription, setUserDescription] = React.useState("");
  const [blogs, setBlogs] = React.useState([]);
  const getBlogs = () => {
    // fetch all blogs from database
    // return all blogs
    const userID = localStorage.getItem("userID");
    axios.get(`http://localhost:8080/get-myblogs/${userID}`).then((response)=>{
      setUserDescription(response.data[0].userDescription);
      setBlogs(response.data[0].userBlogs);
    });
  };

  useEffect(() => {
    getBlogs();
  }, []);


  return (
    <div>
      <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
        <div className="w-[90%] h-[90%] flex flex-row z-10">
          <div
            style={{ width: "15%", display: "flex" }}
            className="w-[15%] ml-0"
          >
            <LeftNav />
          </div>
          
          <div style={{ width: "100%", overflow: "auto" }}>
            <div className="ml-8 flex mb-12 items-center justify-center pt-[5%]">
              <div className="flex-col justify-center items-center">
                <Avatar
                  sx={{ width: 100, height: 100, top: "25%" }}
                  src={localStorage.getItem("imgUrl")}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  marginLeft: "2%",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 className="text-2xl mb-[1%]">{localStorage.getItem('firstName')+ ' '+localStorage.getItem('lastName')}</h1>
                <p className="text-sm">{userDescription}</p>
              </div>
            </div>
            <div
              style={{ width: "100%", overflow: "auto", padding: "2%" }}
              className="grid grid-cols-3 gap-12"
            >
              <div style={{ margin: "2%", width: "150vh", height: "auto", display:"flex", flexWrap:"wrap"}}>
                {
                  blogs.map((blog)=>{
                    return <Blog
                      blogName={blog.blogName}
                      description={blog.description}
                      imgSrc={blog.imgUrl}
                      authorName = {localStorage.getItem("firstName")+" "+localStorage.getItem("lastName")}
                      date={blog.date}
                      authorImg = {localStorage.getItem("imgUrl")}
                      likedBy = {blog.likedBy}
                    />
                  } )
                }
                
              </div>
              {/*<div style={{ margin: "2%", width: "auto", height: "auto" }}>
                <Blog
                  blogName="My Favorite Algorithim"
                  description={blogText}
                  imgSrc="algo.jpeg"
                />
              </div>
              <div style={{ margin: "2%", width: "auto", height: "auto" }}>
                <Blog
                  blogName="Friend function in C++"
                  description={blogText}
                  imgSrc="c++.png"
                />
              </div>
              <div style={{ margin: "2%", width: "auto", height: "auto" }}>
                <Blog
                  blogName="Python is best for machine learning"
                  description={blogText}
                  imgSrc="python.jpeg"
                />
              </div>
              <div style={{ margin: "2%", width: "auto", height: "auto" }}>
                <Blog
                  blogName="useState in react"
                  description={blogText}
                  imgSrc="react.png"
                />
              </div>

              <div style={{ margin: "2%", width: "auto", height: "auto" }}>
                <Blog
                  blogName="Standard of Ruby on Rails"
                  description={blogText}
                  imgSrc="ror.png"
                />
              </div>
              <div style={{ margin: "2%", width: "auto", height: "auto" }}>
                <Blog
                  blogName="new key world in solidity"
                  description={blogText}
                  imgSrc="solidity.png"
                />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
      <Particles
        className="z-0 absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}