import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import { Avatar, AvatarGroup } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";
import EditBlog from "./EditBlog";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BlogModal({
  imgSrc,
  blogName,
  description,
  authorName,
  date,
  authorImg
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const col = React.useRef(null);

  const changeColor = (e) => {
    if (e.target.style.backgroundColor !== "white") {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "#3A0303";
    } else {
      e.target.style.backgroundColor = "#3A0303";
      e.target.style.color = "white";
    }
  };  

  const deleteBlog = () => {
    axios.post("http://localhost:8080/deleteBlog", {
      blogName,
      userID: localStorage.getItem("userID"),
    }).then((res) => {
      if(res.data === "blog_deleted") {
        window.location.reload();
      }
    });
  };

  return (
    <div className="overflow-auto">
      <Button
        variant="contained"
        style={{ backgroundColor: "white", color: "#3A0303" }}
        onClick={handleOpen}
      >
        Learn more
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-[80%] h-[90%] bg-white m-[5%] ml-[10%] overflow-scroll rounded-lg">
          <div className="bg-white shadow-md rounded-lg p-4 text-black text-opacity-80 border border-black">
            <div className="flex items-center mb-4 text-black text-opacity-80 pl-6 pt-6">
              <img
                src={authorImg}
                alt="Author Icon"
                className="w-10 h-10 rounded-full mr-4 "
              />
              <div>
                <h2 className="text-lg font-bold text-black text-opacity-80">
                  {blogName}
                </h2>
                <p className="text-black text-opacity-80 font-[300] text-xs">
                  {authorName} - {date}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 text-justify">
              <p className="font-[500] text-lg text-justify pl-6 pt-6">
                {description}
              </p>
              <img
                src={imgSrc}
                alt="Post Image"
                className="w-[50%] rounded-md mt-12 mb-12"
              />
            </div>

            <hr className="border-b-1 border-gray-900"></hr>
            <div className="mt-[2%] ml-[1%] flex">
              <div className="flex flex-col justify-center">
                <FavoriteIcon sx={{ width: 50, height: 50, color: "red" }} />
              </div>
              <AvatarGroup max={2} className="flex flex-col justify-center">
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  src="https://avatars.githubusercontent.com/u/82564549?v=4"
                />
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  src="https://avatars.githubusercontent.com/u/82564549?v=4"
                />
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  src="https://avatars.githubusercontent.com/u/82564549?v=4"
                />
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  src="https://avatars.githubusercontent.com/u/82564549?v=4"
                />
              </AvatarGroup>
              <div className="flex flex-col justify-center mr-[2%]">
                <h1>and others.</h1>
              </div>

              <div className="ml-[65%] flex">
                <EditBlog blogName={blogName} description={description} imgUrl={imgSrc} />
                <DeleteIcon sx={{ width: 40, height: 40 }} style={{color:"black"}} onClick={deleteBlog}/>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
