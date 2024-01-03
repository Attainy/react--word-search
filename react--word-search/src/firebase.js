// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL0KlwGQWPzPJAm9PAqvnS_32nb3GCo2g",
  authDomain: "word-search-react-c62c2.firebaseapp.com",
  projectId: "word-search-react-c62c2",
  storageBucket: "word-search-react-c62c2.appspot.com",
  messagingSenderId: "773824310925",
  appId: "1:773824310925:web:f341c7a7b95873268d7cc4",
  measurementId: "G-WJN5JXPNCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);