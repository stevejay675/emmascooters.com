// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_GcETEzXhhXJoBa6L2YMV83TsPkLrIbM",
  authDomain: "scootershop-5623d.firebaseapp.com",
  projectId: "scootershop-5623d",
  storageBucket: "scootershop-5623d.appspot.com",
  messagingSenderId: "637995338753",
  appId: "1:637995338753:web:03b7b09fdb65c225b00400",
  measurementId: "G-D6EEDK6R73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if window object exists before initializing analytics to avoid SSR issues
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Google Auth Provider for Google Sign-In
export const googleProvider = new GoogleAuthProvider();
