// import Button from "@material-ui/core/Button"
// import IconButton from "@material-ui/core/IconButton"
// import TextField from "@material-ui/core/TextField"
// import AssignmentIcon from "@material-ui/icons/Assignment"
// import PhoneIcon from "@material-ui/icons/Phone"
// import React, { useEffect, useRef, useState } from "react"
// import { CopyToClipboard } from "react-copy-to-clipboard"
// import Peer from "simple-peer"
// import io from "socket.io-client"
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";
// import { options } from "../../Assets/code/options";


// const socket = io.connect('http://localhost:5000')

// function VideoCall() {

//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   const particlesLoaded = (container) => {};
  
// 	const [ me, setMe ] = useState("")
// 	const [ stream, setStream ] = useState()
// 	const [ receivingCall, setReceivingCall ] = useState(false)
// 	const [ caller, setCaller ] = useState("")
// 	const [ callerSignal, setCallerSignal ] = useState()
// 	const [ callAccepted, setCallAccepted ] = useState(false)
// 	const [ idToCall, setIdToCall ] = useState("")
// 	const [ callEnded, setCallEnded] = useState(false)
// 	const [ name, setName ] = useState("")
// 	const myVideo = useRef()
// 	const userVideo = useRef()
// 	const connectionRef= useRef()

// 	useEffect(() => {
// 		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
// 			setStream(stream)
// 				myVideo.current.srcObject = stream
// 		})

// 	socket.on("me", (id) => {
// 			setMe(id)
// 		})

// 		socket.on("callUser", (data) => {
// 			setReceivingCall(true)
// 			setCaller(data.from)
// 			setName(data.name)
// 			setCallerSignal(data.signal)
// 		})
// 	}, [])

// 	const callUser = (id) => {
// 		const peer = new Peer({
// 			initiator: true,
// 			trickle: false,
// 			stream: stream
// 		})
// 		peer.on("signal", (data) => {
// 			socket.emit("callUser", {
// 				userToCall: id,
// 				signalData: data,
// 				from: me,
// 				name: name
// 			})
// 		})
// 		peer.on("stream", (stream) => {
			
// 				userVideo.current.srcObject = stream
			
// 		})
// 		socket.on("callAccepted", (signal) => {
// 			setCallAccepted(true)
// 			peer.signal(signal)
// 		})

// 		connectionRef.current = peer
// 	}

// 	const answerCall =() =>  {
// 		setCallAccepted(true)
// 		const peer = new Peer({
// 			initiator: false,
// 			trickle: false,
// 			stream: stream
// 		})
// 		peer.on("signal", (data) => {
// 			socket.emit("answerCall", { signal: data, to: caller })
// 		})
// 		peer.on("stream", (stream) => {
// 			userVideo.current.srcObject = stream
// 		})

// 		peer.signal(callerSignal)
// 		connectionRef.current = peer
// 	}

// 	const leaveCall = () => {
// 		setCallEnded(true)
// 		connectionRef.current.destroy()
// 	}

// 	return (
// 		<>
// 	<div>
//       <div className="flex flex-row h-full w-full justify-end gap-[15%] h-screen bg-black">
//         <div>
//           <div class="flex-grow flex flex-col items-center justify-center h-[90%]">
//             <div class="flex flex-row gap-32">
             
//               <div class="flex flex-col items-center justify-center w-full">
//                 <div className="video">
//                   {stream &&  <video className='rounded-full' playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
//             </div>
//                 <span className="text-white font-bold text-lg mb-4">Aries</span>
//                 <p className='text-white'>{me}</p>
//               </div>

//               <div class="flex flex-col items-center justify-center w-full">

//               {callAccepted && !callEnded ?
//                 <video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />:
					
//                 <div className='flex flex-col justify-center items-center'>
//                 <img
//                   src="https://w0.peakpx.com/wallpaper/416/423/HD-wallpaper-devil-boy-in-mask-red-hoodie-dark-background-4ef517.jpg"
//                   class="rounded-full w-[15rem]"
//                 />
//                 <span class="text-white font-bold text-lg ">Mars</span>
//                 </div>
//                 }
//               </div>

//             </div>
            
//           </div>
//           <textarea
					
// 					value={idToCall}
// 					onChange={(e) => setIdToCall(e.target.value)}
// 				/>
// 				<div className="call-button">
// 					{callAccepted && !callEnded ? (
// 						<Button variant="contained" color="secondary" onClick={leaveCall}>
// 							End Call
// 						</Button>
// 					) : (
// 						<IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
// 							<PhoneIcon fontSize="large" />
// 						</IconButton>
// 					)}
// 					{idToCall}
// 				</div>

//           <div class="flex-none flex items-center justify-center py-4 px-6 bg-gray-100 rounded-md font-bold">
//             <button class="text-black hover:text-gray-400 mr-6 font-bold">
//               Mute
//             </button>
//             <button class="text-black hover:text-gray-400 mr-6 font-bold">
//               End Call
//             </button>
//             <button class="text-black hover:text-gray-400 mr-6  font-bold">
//               Video
//             </button>
//           </div>
//         </div>

//         <div class="flex flex-col py-4 px-6 bg-black">
//           <div class="h-full">
//             <div class="flex flex-col h-full justify-between bg-white bg-opacity-5 rounded-md">
//               <div class="flex-none flex items-center justify-center py-2 px-4 bg-[#3a0303] text-white  text-lg ">
//                 Chat
//               </div>

//               <div class="flex-none flex items-center justify-center py-2 px-4 ">
//                 <input
//                   type="text"
//                   placeholder="Type a message..."
//                   class="border-2 rounded-full py-2 px-4 w-full text-white"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Particles
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={options}
//       />
//     </div>
// 		</>
// 	)
// }

// export default VideoCall;
