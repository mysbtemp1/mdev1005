import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCsyV_B_VsXRngdxybt2jEI_b1G3oIQwtM",
  authDomain: "react-mdev1005.firebaseapp.com",
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "react-mdev1005",
  storageBucket: "react-mdev1005.appspot.com",
  messagingSenderId: "629582058328",
  appId: "1:629582058328:web:c2f6b33a718b24bd890b2d"
})

export const auth = app.auth()
export default app
