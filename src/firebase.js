import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWML45zZZQYPwuSZ5S0DWbPmPNr8kNM_A",
  authDomain: "demo1-56fb4.firebaseapp.com",
  projectId: "demo1-56fb4",
  storageBucket: "demo1-56fb4.appspot.com",
  messagingSenderId: "897023225465",
  appId: "1:897023225465:web:7e5aa204092a5e2c352ea8",
  measurementId: "G-KCJYFY47L5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
