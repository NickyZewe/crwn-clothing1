// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNBK5lDwW6wQ8rNQsDtQhLfakEE0EAZXs",
  authDomain: "crwn-clothing-db-3cd66.firebaseapp.com",
  projectId: "crwn-clothing-db-3cd66",
  storageBucket: "crwn-clothing-db-3cd66.appspot.com",
  messagingSenderId: "672213412272",
  appId: "1:672213412272:web:04be50736a9a80e5b50e75",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
