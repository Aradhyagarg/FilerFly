// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZsr0m9gALfdk9USOIVOS_GZamJC4fn2Q",
  authDomain: "filerfly-60736.firebaseapp.com",
  projectId: "filerfly-60736",
  storageBucket: "filerfly-60736.appspot.com",
  messagingSenderId: "886014786555",
  appId: "1:886014786555:web:94025032c7918ec413e95e",
  measurementId: "G-BNK2YX4GYS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);