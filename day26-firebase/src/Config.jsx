
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,  GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7ykkxX67jidnKencZPWoMXnE322Eq-6o",
  authDomain: "test-58dfc.firebaseapp.com",
  projectId: "test-58dfc",
  storageBucket: "test-58dfc.appspot.com",
  messagingSenderId: "381346146237",
  appId: "1:381346146237:web:cace955763b3a6854694d4",
  measurementId: "G-4PCMKW5JPF"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}