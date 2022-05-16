// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeueafvW267kB5UZJICKshi7mAM4DBndU",
  authDomain: "doctors-portal-cbffe.firebaseapp.com",
  projectId: "doctors-portal-cbffe",
  storageBucket: "doctors-portal-cbffe.appspot.com",
  messagingSenderId: "171067187457",
  appId: "1:171067187457:web:866063d56082a7364c7b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;