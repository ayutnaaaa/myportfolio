import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkNt0M0WPFjtR3DSHUfnfsJ4K6u-6238w",
  authDomain: "myportfolio-cb22d.firebaseapp.com",
  projectId: "myportfolio-cb22d",
  storageBucket: "myportfolio-cb22d.appspot.com",
  messagingSenderId: "229357374947",
  appId: "1:229357374947:web:47098a7fa6b00ce8ad24d6",
  measurementId: "G-32WEEM6CSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
