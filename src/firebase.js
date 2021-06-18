import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsxGBO7Up34EHZDROSGyEqT9hpmhy1SRQ",
    authDomain: "clone-cbdaa.firebaseapp.com",
    projectId: "clone-cbdaa",
    storageBucket: "clone-cbdaa.appspot.com",
    messagingSenderId: "288544484415",
    appId: "1:288544484415:web:cf5a4be82577bffb5cdc8a",
    measurementId: "G-E11KCXL4QC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };