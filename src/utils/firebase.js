// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx3QvCcR5SAc6CCFa65ZQueZcM57Ul-jU",
  authDomain: "netflixgpt-7a2f2.firebaseapp.com",
  projectId: "netflixgpt-7a2f2",
  storageBucket: "netflixgpt-7a2f2.appspot.com",
  messagingSenderId: "358013342593",
  appId: "1:358013342593:web:d3434edc8efeb6a0b08e80",
  measurementId: "G-PK7JRZ9SLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
