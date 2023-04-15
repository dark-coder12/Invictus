import googleLogo from "../Assets/pictures/googleLogo.png";

const FirebaseAuth = () => {
  return (
    <div className="flex flex-row justify-evenly items-center">
      <button className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white opacity-90 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <img src={googleLogo} alt="Google's Logo" className="h-6 w-6 mr-2" />
        Signin using Google
      </button>
    </div>
  );
};

export default FirebaseAuth;
