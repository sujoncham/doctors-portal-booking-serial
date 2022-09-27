// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbJD-lrQyXWXiwamsOkRxJpp451BGwKgQ",
  authDomain: "doctors-portal-1189b.firebaseapp.com",
  projectId: "doctors-portal-1189b",
  storageBucket: "doctors-portal-1189b.appspot.com",
  messagingSenderId: "538087355163",
  appId: "1:538087355163:web:29eb5d081d12ea7b9519be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

export default auth;