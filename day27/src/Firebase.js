// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAohVSy0tYe7wrQv8g8QsijrTsag3qvkeA",
  authDomain: "fir-realtime-database-3ec15.firebaseapp.com",
  databaseURL: "https://fir-realtime-database-3ec15-default-rtdb.firebaseio.com",
  projectId: "fir-realtime-database-3ec15",
  storageBucket: "fir-realtime-database-3ec15.appspot.com",
  messagingSenderId: "545998446305",
  appId: "1:545998446305:web:4394acf3da2e48b1d061a0",
  measurementId: "G-C3XF8DQSJL"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



export {database}