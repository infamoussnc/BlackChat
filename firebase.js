import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmEk1nPc3SmMm70IrpWxH9lB8kZ71h65A",
  authDomain: "blackchat-92e51.firebaseapp.com",
  projectId: "blackchat-92e51",
  storageBucket: "blackchat-92e51.appspot.com",
  messagingSenderId: "1026735803710",
  appId: "1:1026735803710:web:bff74418d619a27f93306f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

