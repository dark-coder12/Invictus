import React, { useRef, useEffect } from 'react';
import template from '../Assets/pictures/certificate.png';

const DownloadCertificate = ({ name }) => {
  const canvasRef = useRef(null);

  const drawTemplate = (canvas, image) => {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  const writeName = (canvas, name) => {
    const ctx = canvas.getContext('2d');
    ctx.font = 'italic 500px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#304a62';
    ctx.textDecoration = 'underline'; 
    const x = canvas.width / 2;
    const y = canvas.height * 0.5;
    ctx.fillText(name, x, y);
  };

  const downloadImage = (canvas, filename) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
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
    <div>
      <div className='flex flex-col justify-center align-center gap-4 mb-12'>
        <button disabled={!name} onClick={handleDownloadClick}>
          Download Image
        </button>
      </div>

      <canvas
        ref={canvasRef}
        style={{ width: '700px', height: '500px' }}
        width={13000}
        height={10000}
      />
    </div>
  );
};

export default DownloadCertificate;
