// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsyV_B_VsXRngdxybt2jEI_b1G3oIQwtM",
  authDomain: "react-mdev1005.firebaseapp.com",
  projectId: "react-mdev1005",
  storageBucket: "react-mdev1005.appspot.com",
  messagingSenderId: "629582058328",
  appId: "1:629582058328:web:c2f6b33a718b24bd890b2d",
  measurementId: "G-QPT8KLTBJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);