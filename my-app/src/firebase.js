import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAf65DE66tyURtaIZrOSW1LZrayPap9eU8",
  authDomain: "nycmagazine-39a3a.firebaseapp.com",
  projectId: "nycmagazine-39a3a",
  storageBucket: "nycmagazine-39a3a.firebasestorage.app",
  messagingSenderId: "862640052224",
  appId: "1:862640052224:web:96d35d1fce27d2355960e5",
  measurementId: "G-TNGCD8HENB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
