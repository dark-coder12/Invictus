import React from 'react';

const ErrorPage = () => {
    
  return (
    <div className="bg-[#020202] h-full w-[30%] flex flex-col items-center gap-10 rounded-r-md">
      <h1 className="text-white text-4xl font-bold">404</h1>
      <p className="text-white text-lg">Page Not Found</p>
    </div>
  );
};

export default ErrorPage;