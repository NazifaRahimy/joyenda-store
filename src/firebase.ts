// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvOOz8RoJMpQPWfn86wC6KiR9Nts0Yzag",
  authDomain: "joyenda-store.firebaseapp.com",
  projectId: "joyenda-store",
  storageBucket: "joyenda-store.firebasestorage.app",
  messagingSenderId: "994081318753",
  appId: "1:994081318753:web:cebaf7a36cc2806c02c720",
  measurementId: "G-67T0WTTZMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
