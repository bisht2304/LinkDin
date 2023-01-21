// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDxa45bAXAUDZaznS2lHjt-eWHo-NB0rUc",
    authDomain: "linkdin-9f3f8.firebaseapp.com",
    projectId: "linkdin-9f3f8",
    storageBucket: "linkdin-9f3f8.appspot.com",
    messagingSenderId: "968859785390",
    appId: "1:968859785390:web:e0c2aa102790b37d70753f",
    measurementId: "G-RT9K9GJ7XJ"
  };
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
