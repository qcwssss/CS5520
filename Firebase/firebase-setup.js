// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE7xph8MAb02jsgorUDZTi874wf-_53Yc",
  authDomain: "user-cs5520.firebaseapp.com",
  projectId: "user-cs5520",
  storageBucket: "user-cs5520.appspot.com",
  messagingSenderId: "240394337872",
  appId: "1:240394337872:web:a49d551a8bf24d9200db55",
  measurementId: "G-MZ3Y0J523E",
};

// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(myApp);r
export const firestore = getFirestore(myApp);
