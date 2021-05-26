import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1edmoDPFXQHGAUOCzX0CfSsJSnIZ7lLc",
    authDomain: "covidinfoproject-d728b.firebaseapp.com",
    projectId: "covidinfoproject-d728b",
    storageBucket: "covidinfoproject-d728b.appspot.com",
    messagingSenderId: "797770083545",
    appId: "1:797770083545:web:1ef45446422752b5cb62c8",
    measurementId: "G-6ZMJP299VC"
  };
   firebase.initializeApp(firebaseConfig);

   export default firebase;