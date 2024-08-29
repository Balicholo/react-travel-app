// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNHgUWS_q6AEEuq4rBOJMjK6pZuEGuXfM",
  authDomain: "wisdom-login-auth.firebaseapp.com",
  projectId: "wisdom-login-auth",
  storageBucket: "wisdom-login-auth.appspot.com",
  messagingSenderId: "366013117080",
  appId: "1:366013117080:web:f72ed696c5021c3fba16ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;