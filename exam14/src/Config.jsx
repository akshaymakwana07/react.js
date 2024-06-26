
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWsBjj6WZXhrsaFdlSAsyXSNzVIZlz5EY",
  authDomain: "project-6a277.firebaseapp.com",
  projectId: "project-6a277",
  storageBucket: "project-6a277.appspot.com",
  messagingSenderId: "154082926496",
  appId: "1:154082926496:web:13c7cc15c9a1e6f3964ec5",
  measurementId: "G-7Z77X3SEB9"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}