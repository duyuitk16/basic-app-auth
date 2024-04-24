import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtQsw0rSkKzzeT3dpWBGzBuoANWrQhjWM",
  authDomain: "react-native-auth-f4223.firebaseapp.com",
  projectId: "react-native-auth-f4223",
  storageBucket: "react-native-auth-f4223.appspot.com",
  messagingSenderId: "1037664615140",
  appId: "1:1037664615140:web:0ac1d9295b14537b460af1"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);