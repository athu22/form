import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCGFnzVsOdHcTvldbDBOz-vOjeHpUtj75Y",
  authDomain: "form-c90d7.firebaseapp.com",
  projectId: "form-c90d7",
  storageBucket: "form-c90d7.firebasestorage.app",
  messagingSenderId: "516229400982",
  appId: "1:516229400982:web:5b6665482b56fc4be3b5b7",
  measurementId: "G-Q0KX5TV4CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
