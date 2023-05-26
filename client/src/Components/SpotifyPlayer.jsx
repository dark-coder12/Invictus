import React, { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "tailwindcss/tailwind.css";

import play from "../Assets/pictures/play.png";
import pause from "../Assets/pictures/pause.png";


const SpotifyPlayer = () => {

  
  const [searchTerm, setSearchTerm] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const spotifyApi = new SpotifyWebApi();
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  
  const authEndpoint = "https://accounts.spotify.com/api/token";

  const handlePlay = async () => {
    try {
      handleAuth();
      const response = await spotifyApi.searchTracks(searchTerm);
      const track = response.tracks.items[0];
      if (track) {
        const trackId = track.uri.split(":")[2];
        setCurrentTrack(track);
        spotifyApi.play({ uris: [`spotify:track:${trackId}`] });
        setIsPlaying(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePause = () => {
    setCurrentTrack(null);
    spotifyApi.pause();
    setIsPlaying(false);
  };

  const handleAuth = async () => {
    const token = btoa(`${clientId}:${clientSecret}`);
    try {
      const response = await fetch(authEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${token}`,
        },
        body: "grant_type=client_credentials",
      });
      const data = await response.json();
      const accessToken = data.access_token;
      spotifyApi.setAccessToken(accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[80%]">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Track"
          className="rounded-sm py-0.5 px-1 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:shadow-outline w-[80%] text-xs"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          className="text-md text-[#3a0303] rounded-lg"
          onClick={isPlaying ? handlePause : handlePlay}
          disabled={!searchTerm}
        >
          {isPlaying ? (
            <img className="rounded-3xl pt-4 w-6" src={pause} />
          ) : (
            <img className="rounded-3xl w-6 pt-4" src={play}></img>
          )}
        </button>
      </div>
      {currentTrack && (
        <div className="mt-4">
          <h3 className="font-mono text-[11px]">
            {" "}
            {currentTrack.name} | {currentTrack.artists[0].name}
          </h3>
          <audio
            src={currentTrack.preview_url}
            autoPlay
            onEnded={handlePause}
          />
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
