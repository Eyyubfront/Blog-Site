// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYEXpAXcceWrwQdsURR_IR-Yi5jY2TYrs",
  authDomain: "blog-site-f9acd.firebaseapp.com",
  databaseURL: "https://blog-site-f9acd-default-rtdb.firebaseio.com",
  projectId: "blog-site-f9acd",
  storageBucket: "blog-site-f9acd.appspot.com",
  messagingSenderId: "346853891539",
  appId: "1:346853891539:web:7d41b1ce2a90d49d73e326",
  measurementId: "G-E0NYDLSY6S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
