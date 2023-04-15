import BGVideo from "../Assets/videos/signinBGVideo.mp4";

const BackgroundVideo = () => {
  return (
    <video
      className="rounded-tl-xl rounded-bl-xl object-fill w-full h-full filter brightness-[0.55] opacity-60"
      src={BGVideo}
      type="video/mp4"
      autoPlay
      loop
      muted
    />
  );
};

export default BackgroundVideo;
