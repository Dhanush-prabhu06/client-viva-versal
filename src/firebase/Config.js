// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFU_-5MVgq1K-KKZsZ-zC65zznFbjDeCY",
  authDomain: "new-viva-fernleaf-resort.firebaseapp.com",
  projectId: "new-viva-fernleaf-resort",
  storageBucket: "new-viva-fernleaf-resort.appspot.com",
  messagingSenderId: "733966235277",
  appId: "1:733966235277:web:23078007d67ef0af2854c4",
  measurementId: "G-WMYKM612RL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
