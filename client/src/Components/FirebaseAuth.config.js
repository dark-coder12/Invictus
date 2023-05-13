// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBG7p-pv5bYN6pxsAKRdXpLq_5ZSFB2Lx8",
    authDomain: "invictus-b39fe.firebaseapp.com",
    projectId: "invictus-b39fe",
    storageBucket: "invictus-b39fe.appspot.com",
    messagingSenderId: "433881994215",
    appId: "1:433881994215:web:5a00589bc3bb65bf346342",
    measurementId: "G-Y0YGPF3XVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};

