import {React,useMemo} from "react";
import LeftNav from "../../Components/LeftNav";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Avatar, AvatarGroup } from "@mui/material";
import Fab from "@mui/material/Fab";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "../../Assets/code/options";
import { useEffect,useState} from "react";
import axios from "axios";
import './meetup.css';  
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useNavigate } from 'react-router-dom';

import './meetup.css';
export default function MeetUpInfo({}) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const navigate = useNavigate();

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })
  
  Geocode.setApiKey('AIzaSyDs82A5rbcPL0OTOSNbORhLFrk35NiffvY');
  Geocode.setLanguage('en');
  Geocode.setRegion('PK');
  Geocode.setLocationType('ROOFTOP');
  Geocode.enableDebug();


  
  const particlesLoaded = (container) => {};
  const [meetupinfo,setmeetupinfo] = useState([]);
  const [meetup,setmeetup] = useState([]);  

  const [eventName, setName] = useState("Event Name");
  const [soceityImg, setsoceityImg] = useState("Society Image");
  const [eventImg, setEventImg] = useState("Event Image");
  const [hostedBy, setHostedBy] = useState("Hosted By");

  const [eventDate, setDate] = useState("Event Date");
  const [eventTime, setTime] = useState("Event Time");
  const [eventDetalils, setDetails] = useState("Event Details");
  const [whoisitfor, setWhoisitfor] = useState("Who is it for");
  const [prequisites, setPrequisites] = useState("Prequisites");
  const [eventLocation, setLocation] = useState("Event Location");
  const [speaker, setSpeaker] = useState("Speaker");
  const [tags,setTags] = useState([]);
  const [attendees,setAttendees] = useState([]);
  const [attending,setAttending] = useState([]);
  const [attendeesImg,setAttendeesImg] = useState([]);
  const [lat,setLat] = useState(0);
  const [lng,setLng] = useState(0);

  useEffect(() => {

  

    const meetupName = localStorage.getItem("meetUpName");
    axios.get(`http://localhost:8080/getMeetUpInfo/${meetupName}`).then((res) => {
     
      setmeetupinfo(res.data);
      setName(res.data[0].name);
      setDetails(res.data[0].details);
      setEventImg(res.data[0].imgUrl);
      setWhoisitfor(res.data[0].whoisitfor);
      setPrequisites(res.data[0].prequisites);
      setSpeaker(res.data[0].speakers);

      setTags([]);
      res.data[0].tags.forEach((tag) => { 
        const newTag =   <Fab style={{ margin: "1%",color: "white",backgroundColor: "#3A0303",}} variant="extended" sx={{ width: 150, height: 25 }}> {tag}</Fab>
        const temp = tags;
        temp.push(newTag);
        setTags(temp);
      });

      setAttendees(res.data[0].attending);
    });

    axios.get(`http://localhost:8080/getMeetUp/${meetupName}`).then((res) => {
      setmeetup(res.data);
      setName(res.data[0].name);
      setsoceityImg(res.data[0].image);
      setDate(res.data[0].date);
      setTime(res.data[0].time);
      setLocation(res.data[0].location);
      Geocode.fromAddress(res.data[0].location).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLat(lat);
          setLng(lng);
        },
        (error) => {
          console.error(error);
        }
      );
      setHostedBy(res.data[0].conductedBy);
      setAttending(res.data[0].attending);
    });
    
    attendees.forEach((attendee) => {
      setAttendeesImg([]);
      axios.get(`http://localhost:8080/get-user/${attendee}`).then((res) => {
        const newAvatar =  <Avatar src={res.data.imgUrl} />;
        const temp = attendeesImg;
        temp.push(newAvatar);
        setAttendeesImg(temp);
      });
    });
  },[]);
  



  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      
          
   

      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>

        <div className="m-6 w-[85%] border-y-2 p-2 overflow-auto">
          <div style={{ borderBottom: "1px solid white" }}>
          <button class="mb-10 ml-100 bg-[#3a0303] opacity-70 rounded-md py-2 px-4 hover:bg-[#2a0202]" onClick={()=> navigate('/all-communities')}>
            Go Back To Library
           </button>
            <h1 className="text-3xl pt-4 pb-2">{eventName}</h1>
            <div className="mt-2 mb-2">
              {/* for now the host */}
              <img src={soceityImg}></img>
            </div>
            <div>
              <h1>Hosted By</h1>
              <h1 className="pb-4">{hostedBy}</h1>
            </div>
          </div>

          <div className="flex justify-evenly mt-6">
            <div className="w-[50%]">
              <img
                src={eventImg}
                className="w-[50%] rounded-2xl h-[100%]"
              ></img>
            </div>
            <div className="glassmorph w-[50%] flex flex-col justify-center">
              <div className="ml-[20%] flex flex-row">
                <DateRangeIcon />
                <h1>{eventDate}</h1>
              </div>
              <br />
              <div className="ml-[20%] flex flex-row">
                <AccessTimeFilledIcon />
                <h1>{eventTime}</h1>
              </div>
            </div>
          </div>

          <div className="mt-4">
          <button class="mt-12 bg-[#3a0303] rounded-md py-2 px-4 hover:bg-[#2a0202]">
          Register Now!
        </button>
            <div>
              <h1 className="text-2xl underline py-4">Details</h1>
              <p className="text-sm text-justify">
                {eventDetalils}
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Who is it for?</h1>
              <p className="text-sm text-justify">
               {whoisitfor}
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Prerequsites</h1>
              <p className="text-sm text-justify">
                {prequisites}
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Venue</h1>
              <small>FAST NUCES LAHORE</small>
              {console.log(isLoaded)}
                {
                
                  isLoaded? 
                  <div>
                    <GoogleMap zoom={20} mapContainerClassName="map-container" center={{ lat: lat, lng: lng }} /> 
                    <Marker position={{ lat: lat, lng:lng }} color="red" />  
                  </div>
                    : <></>
                }
                
            </div>
            <div className="mt-2">
              <h1 className="text-2xl py-4 ">Speaker</h1>
              <div className="flex">
                <Avatar
                  src={"https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo.jpg"}
                />
                <p className="ml-2 self-center">{speaker}</p>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl  py-4">Relevant Tags</h1>
              <div className="flex">
                 {tags}
              </div>
            </div>
            <div className="mt-2 mb-12">
              <h1 className="text-2xl  py-4">Attendees &nbsp;{attending}</h1>
              <div className="flex">
                <AvatarGroup max={4}>
                  {attendeesImg}                  
                </AvatarGroup>
              </div>
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
