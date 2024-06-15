import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4oG_-9l90GKItkK-owT5vUD1Rrh9ur9Y",
  authDomain: "project-1-8caa5.firebaseapp.com",
  databaseURL: "https://project-1-8caa5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-1-8caa5",
  storageBucket: "project-1-8caa5.appspot.com",
  messagingSenderId: "248844192499",
  appId: "1:248844192499:web:9c8268c72a21fa83640586"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const googleProvider = new GoogleAuthProvider();
