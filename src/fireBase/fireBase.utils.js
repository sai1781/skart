
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider} from 'firebase/auth'


const Config = {
    apiKey: "AIzaSyAydHp1lhdhpBijJI4XA-W7MFjZTZrRc78",
    authDomain: "skart-944af.firebaseapp.com",
    projectId: "skart-944af",
    storageBucket: "skart-944af.appspot.com",
    messagingSenderId: "557891833048",
    appId: "1:557891833048:web:d6d26b0c87e382b9e4dbad",
    measurementId: "G-NNL6GSZFVP"
  };


  // firebase.initializeApp(Config);

  // const auth = firebase.auth();
  // const fireStore = firebase.firestore();

   const app = initializeApp(Config); 
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();
  export const facebookProvider = new FacebookAuthProvider();
  export const twitterProvider = new TwitterAuthProvider();



  // export const auth = app.auth();
  // export const fireStore = app.firestore();




  