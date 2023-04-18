import React, { useRef, useEffect } from "react";
import template from "../Assets/pictures/certificate.png";

const DownloadCertificate = ({ name }) => {
  const canvasRef = useRef(null);

  const drawTemplate = (canvas, image) => {
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  const writeName = (canvas, name) => {
    const ctx = canvas.getContext("2d");
    ctx.font = "italic 500px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#304a62";
    ctx.textDecoration = "underline";
    const x = canvas.width / 2;
    const y = canvas.height * 0.5;
    ctx.fillText(name, x, y);
  };

  const downloadImage = (canvas, filename) => {
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = new Image();
    image.src = template;
    image.onload = () => {
      drawTemplate(canvas, image);
      if (name) {
        writeName(canvas, name);
      }
    };
  }, [name]);

  const handleDownloadClick = () => {
    const canvas = canvasRef.current;
    downloadImage(canvas, `${name}.png`);
  };

  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <canvas
        ref={canvasRef}
        style={{ width: "700px", height: "500px" }}
        width={13000}
        height={10000}
      />

      <div className="flex flex-row justify-center items-center gap-4 m-12">
        <button
          class="bg-[#3a0303] rounded-md py-2 px-4 hover:bg-[#2a0202]"
          disabled={!name}
          onClick={handleDownloadClick}
        >
          Download your Certificate now!
        </button>

        <button class="bg-[#3a0303] rounded-md py-2 px-4 hover:bg-[#2a0202]">
          Back to Certifications
        </button>
      </div>
    </div>
  );
};

export default DownloadCertificate;
