import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputField from "./inputField";
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({description}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [blogName, setBlogName] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'fxpara12');

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dlgfqfcqj/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setImgUrl(data.secure_url);
        console.log('Uploaded image URL:', data.secure_url);
        console.log(blogName, imgUrl, localStorage.getItem('userID'), new Date().toString(), description);
       
      } else {
        console.error('Error uploading image:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const addBlog = () => {
    axios.post('http://localhost:8080/addBlog', {
                 blogName,
                 imgUrl,
                 userID: localStorage.getItem('userID'),
                 date : new Date().toString(),
                 description
    }).then(success => {
        console.log(success);
        alert('Blog added successfully!');
        window.location.reload();
        handleClose();
    }).catch(error => {
        console.log(error);
    }
    );
  }

  return (
    <form>
        <div>
        <Button style={{color:"white"}} onClick={handleOpen}>Post</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <InputField
                htmlFor="Blog Name"
                text="Blog Name"
                name="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
                id="blogName"
                type="text"
                placeholder="My Blog"
                onChange={(e) => setBlogName(e.target.value)}
            />

            <label htmlFor='imgUrl'>Image</label>
            <input type='file' onChange={(e)=>handleUpload(e)}/>
        

            <Button onClick={addBlog}>Post</Button>
            
            </Box>
        </Modal>
        </div>
    </form>
  );
}
