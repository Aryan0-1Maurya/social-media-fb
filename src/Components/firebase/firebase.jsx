import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUdxHBmCKcBNz6e_G7LFvUBKwZmmjIj7k",
  authDomain: "social-media-web-fb.firebaseapp.com",
  projectId: "social-media-web-fb",
  storageBucket: "social-media-web-fb.appspot.com",
  messagingSenderId: "390392488731",
  appId: "1:390392488731:web:99f50ed46b2059fc4b29be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
