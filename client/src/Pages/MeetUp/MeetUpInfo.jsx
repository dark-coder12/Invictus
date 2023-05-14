import {React,useMemo} from "react";
import LeftNav from "../../Components/LeftNav";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Avatar, AvatarGroup } from "@mui/material";
import Fab from "@mui/material/Fab";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "../../Assets/code/options";
import fast  from '../../Assets/pictures/fast.png';
import stacksEvent from '../../Assets/pictures/stacksevent.jpg';
import stacks from '../../Assets/pictures/stacks.svg';

import Map from "../../Components/Map";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import GoogleMapReact from 'google-map-react'

import './meetup.css';
export default function MeetUpInfo({}) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyDs82A5rbcPL0OTOSNbORhLFrk35NiffvY'
  // });

  // const center = useMemo(() => ({ lat:22.563540, lng: 72.956284 }), []);
  // const customMarker = {
  //   path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
  //   fillColor: "red",
  //   fillOpacity: 2,
  //   strokeWeight: 1,
  //   rotation: 0,
  //   scale: 1,
  // };

  const particlesLoaded = (container) => {};

  return (
    <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
      
          
      {/* <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 31.496556, lng: 74.415500 }} icon={customMarker}/>
          </GoogleMap> */}

      <div className="w-[80%] h-[90%] flex flex-row z-10">
        <div className="w-[15%]">
          <LeftNav />
        </div>

        <div className="m-6 w-[85%] border-y-2 p-2 overflow-auto">
          <div style={{ borderBottom: "1px solid white" }}>
            <h1 className="text-3xl pt-4 pb-2">Blockchain Cohort 4.0</h1>
            <div className="mt-2 mb-2">
              {/* for now the host */}
              <img src={stacks}></img>
            </div>
            <div>
              <h1>Hosted By</h1>
              <h1 className="pb-4">Stacks Pakistan FAST Chapter</h1>
            </div>
          </div>

          <div className="flex justify-evenly mt-6">
            <div className="w-[50%]">
              <img
                src={stacksEvent}
                className="w-[50%] rounded-2xl h-[100%]"
              ></img>
            </div>
            <div className="glassmorph w-[50%] flex flex-col justify-center">
              <div className="ml-[20%] flex flex-row">
                <DateRangeIcon />
                <h1>Monday, April 24, 2023</h1>
              </div>
              <br />
              <div className="ml-[20%] flex flex-row">
                <AccessTimeFilledIcon />
                <h1>9:30 PM to 10:30 PM PKT</h1>
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
                We are excited to announce a free, live bootcamp event for
                students who are interested in learning about Power Apps! This
                bootcamp is organized to provide students with a comprehensive
                understanding of Power Apps and how it can be used to build
                custom business applications without writing code.
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Who is it for?</h1>
              <p className="text-sm text-justify">
                This bootcamp is perfect for students who are interested in
                pursuing a career in technology. By attending the bootcamp,
                students will gain valuable application development skills
                across Microsoft Technologies. This is an excellent opportunity
                for students to learn from a seasoned expert and gain practical
                skills that will be useful in their future careers.
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Prerequsites</h1>
              <p className="text-sm text-justify">
                No prior experience with Power Apps is required.
              </p>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl underline py-4">Venue</h1>
              <small>FAST NUCES LAHORE</small>
              <img className="mt-4 rounded-lg" src={fast} />
            </div>
            <div className="mt-2">
              <h1 className="text-2xl py-4 ">Speaker</h1>
              <div className="flex">
                <Avatar
                  src={"https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo.jpg"}
                />
                <p className="ml-2 self-center">Stephen Hawking</p>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl  py-4">Relevant Tags</h1>
              <div className="flex">
                <Fab
                  style={{
                    margin: "1%",
                    color: "white",
                    backgroundColor: "#3A0303",
                  }}
                  variant="extended"
                  sx={{ width: 150, height: 25 }}
                >
                  BlockChain
                </Fab>
                <Fab
                  style={{
                    margin: "1%",
                    color: "white",
                    backgroundColor: "#3A0303",
                  }}
                  variant="extended"
                  sx={{ width: 150, height: 25 }}
                >
                  Etherium
                </Fab>
                <Fab
                  style={{
                    margin: "1%",
                    color: "white",
                    backgroundColor: "#3A0303",
                  }}
                  variant="extended"
                  sx={{ width: 150, height: 25 }}
                >
                  Ether Gas
                </Fab>
              </div>
            </div>
            <div className="mt-2 mb-12">
              <h1 className="text-2xl  py-4">Attendees(4)</h1>
              <div className="flex">
                <AvatarGroup max={3}>
                  <div className="ml-2">
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/82564549?v=4"
                      }
                    />
                  </div>
                  <div className="ml-2">
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/82564549?v=4"
                      }
                    />
                  </div>
                  <div className="ml-2">
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/82564549?v=4"
                      }
                    />
                  </div>
                  <div className="ml-2">
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/82564549?v=4"
                      }
                    />
                  </div>
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
