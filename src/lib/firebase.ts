import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDWnUgDUsZeTVrjEf3-u6SyhMCogd84hfg",
  authDomain: "printing-landing.firebaseapp.com",
  databaseURL: "https://printing-landing-default-rtdb.firebaseio.com",
  projectId: "printing-landing",
  storageBucket: "printing-landing.firebasestorage.app",
  messagingSenderId: "526136845300",
  appId: "1:526136845300:web:f7097c516c5c6bf02c4fa1",
  measurementId: "G-0R49HJM0FW",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
