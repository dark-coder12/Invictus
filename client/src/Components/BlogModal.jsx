import * as React from 'react';
import Button from '@mui/material/Button';
import InputField from './inputField';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import SelectAutoWidth from './SelectAutoWidth';
import { Avatar, AvatarGroup } from '@mui/material';


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

export default function BlogModal({imgSrc,blogName,description}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const col = React.useRef(null);

  const changeColor = (e) =>{
    if (e.target.style.backgroundColor !== "white"){
      e.target.style.backgroundColor = "white";
      e.target.style.color = "#3A0303"
    }
    else {
      e.target.style.backgroundColor =  "#3A0303";
      e.target.style.color ="white";
    }
  }

  return (
    <div>
      <Button variant="contained" style={{backgroundColor:"white",color:"#3A0303"}} onClick={handleOpen}>Learn more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
    <div className='w-[80%] bg-white m-[5%] ml-[10%] overflow-auto'>
        <div>
            <div className='m-[10%]  mb-[2%] flex '>
                <div className='w-[50%]'>
                        <h1 className='text-4xl'>
                            {blogName}
                        </h1>
                    <small>{description}</small>
                </div>
                <div className='ml-[3%] w-[30%]'>
                    <img src={imgSrc}></img>
                </div>
            </div>

            <div className='mt-[2%] ml-[10%] flex '>
                <div className='flex flex-col justify-center mr-[2%]'>
                    <h1>Posted by </h1>
                </div>
                <Avatar sx={{width:50, height:50,top:"25%"}} src="https://avatars.githubusercontent.com/u/82564549?v=4"/>
                <div className='flex flex-col justify-center ml-[2%]'>
                    <h1> on April 22, 2023</h1>
                </div>
            </div>

            <div className='mt-[5%] ml-[10%] flex'>
                <div className='flex flex-col justify-center mr-[2%]'>
                    <h1>Liked by </h1>
                </div>
                <AvatarGroup max={2}>
                    <Avatar sx={{width:50, height:50}} src="https://avatars.githubusercontent.com/u/82564549?v=4"/>
                    <Avatar sx={{width:50, height:50}} src="https://avatars.githubusercontent.com/u/82564549?v=4"/>
                    <Avatar sx={{width:50, height:50}} src="https://avatars.githubusercontent.com/u/82564549?v=4"/>
                    <Avatar sx={{width:50, height:50}} src="https://avatars.githubusercontent.com/u/82564549?v=4"/>
                </AvatarGroup>
                <div className='flex flex-col justify-center mr-[2%]'>
                    <h1>and others.</h1>
                </div>
            </div>
        </div>

    </div>

      </Modal>
    </div>
  );
}
