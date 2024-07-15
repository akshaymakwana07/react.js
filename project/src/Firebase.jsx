import firebase from "firebase/app";
import "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyB2uIOZBsjDeWkV2LtsAanm3ZhgsQEL3bI",
  authDomain: "fir-project-5c88c.firebaseapp.com",
  projectId: "fir-project-5c88c",
  storageBucket: "fir-project-5c88c.appspot.com",
  messagingSenderId: "167280193038",
  appId: "1:167280193038:web:6ad78920b966393c7a565f",
  measurementId: "G-YQT6L4PN1B"
};


  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export {auth,googleAuthProvider,facebookAuthProvider}
