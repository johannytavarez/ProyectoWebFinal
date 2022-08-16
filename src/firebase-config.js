import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

import { getFirestore } from "firebase/firestore";
const app = firebase.initializeApp({
  apiKey: "AIzaSyBet6XyqTiSsxTD8Scrzz9ZOfF9DXqSNy0",
  authDomain: "proyecto-final-web-a5fb6.firebaseapp.com",
  projectId: "proyecto-final-web-a5fb6",
  storageBucket: "proyecto-final-web-a5fb6.appspot.com",
  messagingSenderId: "119171252193",
  appId: "1:119171252193:web:30fd14deb0ca897abe1ca0"
});


export const auth = app.auth();
export const db = getFirestore(app);
export default app;


  