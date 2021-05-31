import firebase from "firebase/app";

import "firebase/firestore";
//console.log = console.warn = console.error = () => {};

// Look ma, no error!
//console.error('Something bad happened.');

const firebaseConfig = {
    apiKey: "AIzaSyA1edmoDPFXQHGAUOCzX0CfSsJSnIZ7lLc",
    authDomain: "covidinfoproject-d728b.firebaseapp.com",
    projectId: "covidinfoproject-d728b",
    storageBucket: "covidinfoproject-d728b.appspot.com",
    messagingSenderId: "797770083545",
    appId: "1:797770083545:web:1ef45446422752b5cb62c8",
    measurementId: "G-6ZMJP299VC"
  };
   try {
    firebase.initializeApp(firebaseConfig)
  } catch (err) {
    // we skip the “already exists” message which is
    // not an actual error when we’re hot-reloading
    if (!firebase.app.length) {
      console.error('Firebase initialization error raised', err.stack)
    }
  }
  
   export default firebase;