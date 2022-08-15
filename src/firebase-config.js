import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBet6XyqTiSsxTD8Scrzz9ZOfF9DXqSNy0",
    authDomain: "proyecto-final-web-a5fb6.firebaseapp.com",
    projectId: "proyecto-final-web-a5fb6",
    storageBucket: "proyecto-final-web-a5fb6.appspot.com",
    messagingSenderId: "119171252193",
    appId: "1:119171252193:web:30fd14deb0ca897abe1ca0"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app)
  
  export { app, auth, db, storage };
  