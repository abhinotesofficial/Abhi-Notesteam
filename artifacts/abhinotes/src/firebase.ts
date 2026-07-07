// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2OGpBJkLYp6QnCgiVaQh6QXu5zJLajb4",
  authDomain: "abhinotes-53cef.firebaseapp.com",
  projectId: "abhinotes-53cef",
  storageBucket: "abhinotes-53cef.firebasestorage.app",
  messagingSenderId: "1013711350238",
  appId: "1:1013711350238:web:c9e449c30740758a2a154f",
  measurementId: "G-XKKMG3GFXH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
